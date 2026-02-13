"use client";

import { useState } from "react";

import type { FaqItem, SectionContent, SectionItem } from "@/content/types";

type FAQSectionProps = {
  section: SectionContent;
};

const isFaq = (item: SectionItem): item is FaqItem =>
  item.kind === "faq";

export function FAQSection({ section }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = section.items ?? [];
  const faqs = items.filter(isFaq);

  return (
    <section className="section-pad border-t border-neutral-200">
      <div className="mx-auto w-full max-w-[900px] px-6 lg:px-10">
        <div className="mb-16">
          {section.subheading ? (
            <div className="text-xs text-neutral-500 tracking-wider uppercase mb-4">
              {section.subheading}
            </div>
          ) : null}
          <h2 className="text-4xl lg:text-5xl tracking-tight mb-6">
            {section.heading}
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            {section.body}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.question}
                className="card-soft overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-inset"
                >
                  <span className="text-lg pr-8 text-neutral-900">{item.question}</span>
                  <span className="text-neutral-500 flex-shrink-0 text-lg">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-neutral-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
