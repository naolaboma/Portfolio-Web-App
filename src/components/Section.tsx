import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-10">
      <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-300 text-center mb-5">
        {title}
      </h2>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
};

export default Section;