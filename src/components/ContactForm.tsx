"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const PROJECT_TYPES = [
  "Web Application Development",
  "Mobile Development",
  "Cloud Infrastructure",
  "UI/UX Design",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="rounded-2xl border border-secondary-100 bg-white p-8">
      <h2 className="text-lg font-semibold text-secondary-900">
        Send us a Message
      </h2>

      {submitted ? (
        <p className="mt-6 rounded-lg bg-primary-50 px-4 py-3 text-sm text-primary-700">
          Thanks for reaching out — our team will respond within 24 business
          hours.
        </p>
      ) : (
        <form
          className="mt-6 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="fullName"
                className="text-xs font-medium uppercase tracking-wide text-secondary-500"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                placeholder="John Doe"
                className="mt-2 w-full rounded-lg border border-secondary-200 px-4 py-2.5 text-sm text-secondary-900 placeholder:text-secondary-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-xs font-medium uppercase tracking-wide text-secondary-500"
              >
                Business Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="john@company.com"
                className="mt-2 w-full rounded-lg border border-secondary-200 px-4 py-2.5 text-sm text-secondary-900 placeholder:text-secondary-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="projectType"
              className="text-xs font-medium uppercase tracking-wide text-secondary-500"
            >
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              className="mt-2 w-full rounded-lg border border-secondary-200 px-4 py-2.5 text-sm text-secondary-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              defaultValue={PROJECT_TYPES[0]}
            >
              {PROJECT_TYPES.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-xs font-medium uppercase tracking-wide text-secondary-500"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Tell us about your project requirements..."
              className="mt-2 w-full resize-none rounded-lg border border-secondary-200 px-4 py-2.5 text-sm text-secondary-900 placeholder:text-secondary-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            Send Request <Send size={16} />
          </button>
        </form>
      )}
    </div>
  );
}
