import React from 'react';
import ContactForm from './ContactForm';

const endpoint = process.env.FORMSPREE_ENDPOINT || '/api/contact';

const Contact: React.FC = () => {
  return (
    <div className="max-w-xl">
      <ContactForm endpoint={endpoint} />
      <p className="mt-3 text-sm text-gray-300">
        Prefer email? <a className="underline" href="mailto:you@example.com">naolaboma@gmail.com</a>
      </p>
    </div>
  );
};

export default Contact;