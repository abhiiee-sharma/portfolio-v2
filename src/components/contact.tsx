import React from 'react';

const Contact = () => {
  return (
    <section className="py-4 mt-0 text-slate-200 text-sm">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-300">Get in Touch</h2>
        <p>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <p>
          Feel free to drop an email at{' '}
          <a
            href="mailto:imabhi0209@gmail.com"
            className="text-teal-400 hover:underline"
          >
            imabhi0209@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
