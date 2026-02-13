type RateLimitResult = {
  ok: boolean;
  remaining: number;
  reset: number;
};

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const buckets = new Map<string, number[]>();

const prune = (timestamps: number[], now: number) =>
  timestamps.filter((timestamp) => now - timestamp < WINDOW_MS);

export const rateLimit = (ip: string, now: number = Date.now()): RateLimitResult => {
  const key = ip || "unknown";
  const timestamps = prune(buckets.get(key) ?? [], now);

  if (timestamps.length >= MAX_REQUESTS) {
    const oldest = timestamps[0] ?? now;
    return {
      ok: false,
      remaining: 0,
      reset: oldest + WINDOW_MS,
    };
  }

  timestamps.push(now);
  buckets.set(key, timestamps);

  return {
    ok: true,
    remaining: MAX_REQUESTS - timestamps.length,
    reset: now + WINDOW_MS,
  };
};

// TODO: replace with a shared store like Upstash for serverless/edge.
