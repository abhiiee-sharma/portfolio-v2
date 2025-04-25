import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 mt-2 text-slate-dark text-sm">
      <div className="space-y-2">
        <p>
          Coded in Visual Studio Code by yours truly Abhishek Sharma.
          Built with Next.js and Tailwind CSS, deployed with Vercel.
          All text is set in the Inter typeface.
        </p>
        <p className="text-slate-500">
          Original UI design inspired by Brittany Chiang —
          <a
            href="https://brittanychiang.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline ml-1"
          >
            brittanychiang.com
          </a>
          . Contact: brittany.chiang@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
