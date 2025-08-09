import React, { useState } from 'react';

// Add strong typing for props and form state
type ContactFormProps = {
  endpoint: string;
};

type FormData = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

type Status =
  | { kind: 'idle' }
  | { kind: 'loading' }
  | { kind: 'success'; message: string }
  | { kind: 'error'; message: string };

const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/;

const ContactForm: React.FC<ContactFormProps> = ({ endpoint }) => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = (data: FormData) => {
    if (!data.name.trim()) return 'Name is required.';
    if (!emailRegex.test(data.email)) return 'Please enter a valid email address.';
    if (!data.message.trim() || data.message.trim().length < 10) return 'Message must be at least 10 characters.';
    return '';
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const validationError = validate(formData);
    if (validationError) {
      setStatus({ kind: 'error', message: validationError });
      return;
    }

    setStatus({ kind: 'loading' });

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const text = await response.text().catch(() => '');
        throw new Error(text || 'Error sending message. Please try again.');
      }

      setStatus({ kind: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unexpected error occurred. Please try again.';
      setStatus({ kind: 'error', message });
    }
  };

  const isSubmitting = status.kind === 'loading';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4" noValidate>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="p-2 border border-gray-300 rounded"
        aria-invalid={status.kind === 'error' && !formData.name.trim()}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="p-2 border border-gray-300 rounded"
        aria-invalid={status.kind === 'error' && !emailRegex.test(formData.email)}
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject (optional)"
        value={formData.subject}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        minLength={10}
        className="p-2 border border-gray-300 rounded"
        aria-invalid={status.kind === 'error' && (!formData.message.trim() || formData.message.trim().length < 10)}
        rows={5}
      />
      <button type="submit" className="p-2 bg-teal-500 text-white rounded disabled:opacity-60" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Send Message'}
      </button>
      <p className="text-gray-600 min-h-[1.25rem]" aria-live="polite">
        {status.kind === 'error' && status.message}
        {status.kind === 'success' && status.message}
      </p>
    </form>
  );
};

export default ContactForm;