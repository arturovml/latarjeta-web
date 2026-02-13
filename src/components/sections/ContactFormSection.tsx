"use client";

import { useMemo, useState } from "react";

import type { FormFieldItem, FormSubmitItem, SectionContent, SectionItem } from "@/content/types";

type ContactFormSectionProps = {
  section: SectionContent;
};

type FormValues = {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  interes: string;
  mensaje: string;
  website: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const isField = (item: SectionItem): item is FormFieldItem =>
  item.kind === "formField";
const isSubmit = (item: SectionItem): item is FormSubmitItem =>
  item.kind === "formSubmit";

const initialValues: FormValues = {
  nombre: "",
  empresa: "",
  email: "",
  telefono: "",
  interes: "",
  mensaje: "",
  website: "",
};

export function ContactFormSection({ section }: ContactFormSectionProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [devMessage, setDevMessage] = useState<string | null>(null);

  const items = useMemo(() => section.items ?? [], [section.items]);
  const fields = items.filter(isField);
  const submitItem = items.find(isSubmit);

  const validate = (nextValues: FormValues) => {
    const nextErrors: FormErrors = {};
    if (!nextValues.nombre.trim()) nextErrors.nombre = "Ingresa tu nombre.";
    if (!nextValues.empresa.trim()) nextErrors.empresa = "Ingresa tu empresa.";
    if (!nextValues.email.trim()) {
      nextErrors.email = "Ingresa un email válido.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextValues.email)) {
      nextErrors.email = "Email inválido.";
    }
    if (!nextValues.interes.trim()) nextErrors.interes = "Selecciona un interés.";
    if (nextValues.mensaje.trim().length < 10) {
      nextErrors.mensaje = "Escribe un mensaje de al menos 10 caracteres.";
    }
    return nextErrors;
  };

  const handleChange = (name: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    setStatusMessage(null);
    setDevMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.nombre,
          email: values.email,
          company: values.empresa,
          phone: values.telefono,
          message: values.mensaje,
          source: "contacto",
          website: values.website,
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.ok) {
        setStatus("success");
        setStatusMessage("Gracias por tu interés. Te contactaremos pronto.");
        setValues(initialValues);
        return;
      }

      if (data?.error === "EMAIL_NOT_CONFIGURED") {
        setStatus("error");
        setStatusMessage(
          "No pudimos enviar tu mensaje. Intenta nuevamente más tarde.",
        );
        setDevMessage(
          "El envío de correo no está configurado aún. Configura env vars en Vercel.",
        );
        return;
      }

      setStatus("error");
      setStatusMessage("No pudimos enviar tu mensaje. Intenta nuevamente.");
    } catch (error) {
      console.error("Contact form submit failed", error);
      setStatus("error");
      setStatusMessage("No pudimos enviar tu mensaje. Intenta nuevamente.");
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-[900px] mx-auto px-6 lg:px-12">
        <div className="mb-10">
          <h2 className="text-3xl mb-4">{section.heading}</h2>
          {section.body ? (
            <p className="text-zinc-400 leading-relaxed">{section.body}</p>
          ) : null}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="sr-only" aria-hidden="true">
            <label htmlFor="contact-website">Website</label>
            <input
              id="contact-website"
              name="website"
              type="text"
              autoComplete="off"
              tabIndex={-1}
              value={values.website}
              onChange={(event) => handleChange("website", event.target.value)}
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {fields.map((field) => {
              const id = `contact-${field.name}`;
              const error = errors[field.name];
              const commonClasses =
                "mt-2 w-full rounded-md border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950";

              if (field.type === "textarea") {
                return (
                  <div key={field.name} className="md:col-span-2">
                    <label htmlFor={id} className="text-sm text-zinc-200">
                      {field.label}
                    </label>
                    <textarea
                      id={id}
                      name={field.name}
                      rows={5}
                      required={field.required}
                      value={values[field.name]}
                      onChange={(event) =>
                        handleChange(field.name, event.target.value)
                      }
                      aria-invalid={Boolean(error)}
                      className={commonClasses}
                      placeholder={field.placeholder}
                    />
                    {error ? (
                      <p className="mt-2 text-sm text-red-400">{error}</p>
                    ) : null}
                  </div>
                );
              }

              if (field.type === "select") {
                return (
                  <div key={field.name} className="md:col-span-2">
                    <label htmlFor={id} className="text-sm text-zinc-200">
                      {field.label}
                    </label>
                    <select
                      id={id}
                      name={field.name}
                      required={field.required}
                      value={values[field.name]}
                      onChange={(event) =>
                        handleChange(field.name, event.target.value)
                      }
                      aria-invalid={Boolean(error)}
                      className={commonClasses}
                    >
                      <option value="">Selecciona una opción</option>
                      {field.options?.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {error ? (
                      <p className="mt-2 text-sm text-red-400">{error}</p>
                    ) : null}
                  </div>
                );
              }

              return (
                <div key={field.name}>
                  <label htmlFor={id} className="text-sm text-zinc-200">
                    {field.label}
                  </label>
                  <input
                    id={id}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    value={values[field.name]}
                    onChange={(event) =>
                      handleChange(field.name, event.target.value)
                    }
                    aria-invalid={Boolean(error)}
                    className={commonClasses}
                    placeholder={field.placeholder}
                  />
                  {error ? (
                    <p className="mt-2 text-sm text-red-400">{error}</p>
                  ) : null}
                </div>
              );
            })}
          </div>

          <button
            type="submit"
            className="inline-flex px-6 py-3 bg-zinc-100 text-zinc-950 hover:bg-zinc-200 transition-colors"
            disabled={status === "loading"}
          >
            {status === "loading"
              ? "Enviando..."
              : submitItem?.label ?? "Enviar solicitud"}
          </button>

          {status === "success" ? (
            <div
              role="status"
              className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-emerald-200"
            >
              <p>{statusMessage ?? "Gracias por tu interés. Te contactaremos pronto."}</p>
            </div>
          ) : null}

          {status === "error" ? (
            <div
              role="alert"
              className="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-200"
            >
              <p>{statusMessage ?? "No pudimos enviar tu mensaje."}</p>
              {devMessage ? (
                <p className="mt-2 text-sm text-red-100/80">{devMessage}</p>
              ) : null}
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}
