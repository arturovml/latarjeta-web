"use client";

import { useMemo, useState } from "react";

import type { FormFieldItem, FormSubmitItem, SectionContent, SectionItem } from "@/content/types";

type ContactFormSectionProps = {
  section: SectionContent;
};

type FormValues = {
  nombre: string;
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
    if (!nextValues.interes.trim()) nextErrors.interes = "Selecciona el tipo de cliente.";
    if (!nextValues.mensaje.trim()) {
      nextErrors.mensaje = "Escribe tu mensaje.";
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
          email: "contacto-form@latarjeta.mx",
          company: values.interes,
          phone: values.telefono,
          message: values.mensaje,
          source: "contacto_form_secundario",
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
    <section className="section-pad">
      <div className="mx-auto w-full max-w-[900px] px-6 lg:px-10">
        <div className="mb-10">
          <h2 className="text-3xl text-neutral-900 mb-4">{section.heading}</h2>
          {section.body ? (
            <p className="text-neutral-600 leading-relaxed">{section.body}</p>
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
              const commonClasses = "input-base";

              if (field.type === "textarea") {
                return (
                  <div key={field.name} className="md:col-span-2">
                    <label htmlFor={id} className="text-sm text-neutral-800">
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
                      <p className="mt-2 text-sm text-red-700">{error}</p>
                    ) : null}
                  </div>
                );
              }

              if (field.type === "select") {
                return (
                  <div key={field.name} className="md:col-span-2">
                    <label htmlFor={id} className="text-sm text-neutral-800">
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
                      <p className="mt-2 text-sm text-red-700">{error}</p>
                    ) : null}
                  </div>
                );
              }

              return (
                <div key={field.name}>
                  <label htmlFor={id} className="text-sm text-neutral-800">
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
                    <p className="mt-2 text-sm text-red-700">{error}</p>
                  ) : null}
                </div>
              );
            })}
          </div>

          <button
            type="submit"
            className="btn-primary"
            disabled={status === "loading"}
          >
            {status === "loading"
              ? "Enviando..."
              : submitItem?.label ?? "Enviar solicitud"}
          </button>

          {status === "success" ? (
            <div
              role="status"
              className="rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-800"
            >
              <p>{statusMessage ?? "Gracias por tu interés. Te contactaremos pronto."}</p>
            </div>
          ) : null}

          {status === "error" ? (
            <div
              role="alert"
              className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-red-800"
            >
              <p>{statusMessage ?? "No pudimos enviar tu mensaje."}</p>
              {devMessage ? (
                <p className="mt-2 text-sm text-red-700">{devMessage}</p>
              ) : null}
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}
