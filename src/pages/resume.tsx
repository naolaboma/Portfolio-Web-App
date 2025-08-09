import React from 'react';

const ResumePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">My CV</h1>
      <p className="mb-4">You can view or download my CV using the controls below:</p>
      <a
        href="/CVF-Naol_A.pdf"
        className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
        download
      >
        Download CV
      </a>
      <iframe
        src="/CVF-Naol_A.pdf"
        className="mt-4 w-full h-screen"
        title="CV Viewer"
      />
    </div>
  );
};

export default ResumePage;