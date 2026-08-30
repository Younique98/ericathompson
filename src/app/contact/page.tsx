"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Coffee } from "lucide-react";

const contactMethods = [
  {
    href: "mailto:ericathompsonsmiles@gmail.com",
    icon: Mail,
    label: "Email",
    value: "ericathompsonsmiles@gmail.com",
  },
  {
    href: "https://www.linkedin.com/in/ericathompsonsmiles/",
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/ericathompsonsmiles",
  },
  {
    href: "https://github.com/Younique98",
    icon: Github,
    label: "GitHub",
    value: "@Younique98",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Website inquiry from ${form.name || "your site"}`,
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`,
    );
    window.location.href = `mailto:ericathompsonsmiles@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Let&apos;s talk</h1>
        <p className="text-gray-400 mb-10 text-lg leading-relaxed">
          Whether you need a technical audit, ongoing advisory, or a workshop
          for your team, tell me a bit about what you&apos;re working on and
          I&apos;ll get back to you within 2 business days.
        </p>

        <div className="grid gap-4 sm:grid-cols-3 mb-10">
          {contactMethods.map(({ href, icon: Icon, label, value }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="p-5 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors flex flex-col items-start gap-2"
            >
              <Icon className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="font-semibold text-white text-sm">{label}</p>
                <p className="text-gray-400 text-xs break-all">{value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="p-6 bg-gray-800 rounded-xl mb-10">
          <h2 className="text-xl font-semibold mb-2 text-white">
            Quick message
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            This opens your email client with the details filled in. Nothing
            is stored or sent anywhere else.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="email"
                placeholder="Your email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <textarea
              placeholder="What are you working on?"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-semibold transition-colors"
            >
              Send message
            </button>
          </form>
        </div>

        <div className="text-center py-6 border-t border-gray-800">
          <h2 className="text-xl font-bold mb-2">Support the work</h2>
          <p className="text-gray-400 mb-6 text-sm">
            If the free content and mentoring has helped you, consider buying
            me a coffee.
          </p>
          <a
            href="https://buymeacoffee.com/shesbrilliant"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#FFDD00] text-black font-bold rounded-lg hover:bg-[#FFDD00]/90 transition-colors"
          >
            <Coffee className="w-5 h-5 mr-2" />
            Buy me a coffee
          </a>
        </div>
      </div>
    </div>
  );
}
