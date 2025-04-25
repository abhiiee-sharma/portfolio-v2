import React from 'react';
import { ExternalLinkIcon } from '@/components/icons';

// Define the type for an experience item
interface ExperienceItem {
  id: string;
  period: string;
  title: string;
  company: string;
  companyUrl: string;
  description: string;
  technologies: string[];
}

// Sample experience data
const experiences: ExperienceItem[] = [
  {
    id: 'acme-corp',
    period: '2021 — Present',
    title: 'Senior Frontend Engineer',
    company: 'Acme Corp',
    companyUrl: 'https://acme.com',
    description: 'Build and maintain critical components used across the platform. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
    technologies: ['JavaScript', 'TypeScript', 'React', 'Next.js']
  },
  {
    id: 'tech-innovations',
    period: '2018 — 2021',
    title: 'Lead Engineer',
    company: 'Tech Innovations',
    companyUrl: 'https://techinnovations.com',
    description: 'Built, styled, and shipped high-quality websites, design systems, and digital experiences for a diverse array of projects for clients including universities, healthcare providers, and fintech companies.',
    technologies: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'GraphQL']
  },
  {
    id: 'digital-agency',
    period: '2016 — 2018',
    title: 'Frontend Developer',
    company: 'Digital Agency',
    companyUrl: 'https://digitalagency.com',
    description: 'Developed and maintained client websites and applications, focusing on responsive design, accessibility, and performance optimization.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'PHP']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <h2 className="section-heading">Experience</h2>

      <div>
        {experiences.map((job) => (
          <div key={job.id} className="experience-card">
            <div className="mb-1 text-sm text-slate-dark">{job.period}</div>

            <h3 className="text-lg font-semibold text-white flex items-center">
              {job.title}
              {job.company && (
                <>
                  <span className="mx-1">—</span>
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal link-underline"
                  >
                    {job.company}
                    <ExternalLinkIcon className="ml-1 w-4 h-4" />
                  </a>
                </>
              )}
            </h3>

            <p className="my-3">{job.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {job.technologies.map((tech) => (
                <span
                  key={`${job.id}-${tech}`}
                  className="text-xs py-1 px-2 rounded-full bg-navy-light text-slate"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
