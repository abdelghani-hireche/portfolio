import { useState } from "react";
import ClaudeLogo from "../components/ClaudeLogo";
import { Mail, Phone, MapPin } from "../components/Icons";
import { contact } from "../data/content";

function InfoRow({ icon, label, children }) {
  return (
    <div className="flex items-start gap-4">
      <div className="icon-badge shrink-0">{icon}</div>
      <div>
        <p className="eyebrow">{label}</p>
        <div className="mt-1 text-sm font-medium text-ink-900">{children}</div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Static-site friendly: opens the visitor's mail client with a prefilled email.
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0A%0A${encodeURIComponent(
      form.message,
    )}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      form.subject || "Portfolio contact",
    )}&body=${body}`;
  };

  return (
    <div className="animate-fade-up grid grid-cols-1 gap-10 lg:grid-cols-[340px,1fr]">
      {/* Contact info */}
      <aside>
        <h2 className="eyebrow mb-6">Contact info</h2>
        <div className="space-y-8">
          <InfoRow icon={<Mail className="h-5 w-5" />} label="Mail me">
            <a href={`mailto:${contact.email}`} className="hover:text-clay-600">
              {contact.email}
            </a>
          </InfoRow>
          <InfoRow icon={<Phone className="h-5 w-5" />} label="Contact me">
            <a href={`tel:${contact.phone}`} className="hover:text-clay-600">
              {contact.phone}
            </a>
          </InfoRow>
          <InfoRow icon={<MapPin className="h-5 w-5" />} label="Location">
            {contact.location.map((l) => (
              <div key={l}>{l}</div>
            ))}
          </InfoRow>
        </div>
      </aside>

      {/* Form */}
      <div className="relative overflow-hidden rounded-xl2 border border-cream-300 bg-white p-8 shadow-soft">
        <ClaudeLogo className="absolute right-6 top-6 h-6 w-6 text-clay-500" />
        <h1 className="font-serif text-3xl font-bold text-ink-900">
          Get in touch with <span className="text-clay-500">me.</span>
        </h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              className="field"
              name="name"
              placeholder="Name *"
              required
              value={form.name}
              onChange={update}
            />
            <input
              className="field"
              type="email"
              name="email"
              placeholder="Email *"
              required
              value={form.email}
              onChange={update}
            />
          </div>
          <input
            className="field"
            name="subject"
            placeholder="Your Subject *"
            required
            value={form.subject}
            onChange={update}
          />
          <textarea
            className="field min-h-[140px] resize-y"
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={update}
          />
          <button type="submit" className="btn-primary">
            Send Message
            <ClaudeLogo className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
