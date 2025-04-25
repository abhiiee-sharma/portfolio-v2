"use client"
import React, { useState } from 'react';
import { ExternalLinkIcon, GitHubIcon } from '@/components/icons';
import Image from 'next/image';

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  externalUrl?: string;
  githubUrl?: string;
  technologies: string[];
  imageSrc?: string;
  featured?: boolean;
}

const projects: ProjectProps[] = [
  {
    id: 'project-tuneporter',
    title: 'TunePorter',
    description:
      'Cross-platform playlist conversion tool that enables users to convert YouTube playlists to Spotify using secure OAuth2 authentication and optimized song-matching algorithms.',
    externalUrl: 'https://tuneporter-client.vercel.app/',
    githubUrl: 'https://github.com/abhiiee-sharma/tunePorter-deploy',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OAuth2'],
    imageSrc: '/images/tuneporter.png',
    featured: true
  },
  {
    id: 'project-shortify',
    title: 'Shortify',
    description:
      'URL shortening service featuring unique short code generation, persistent MongoDB storage, and a responsive EJS-based frontend.',
    externalUrl: 'https://shortify-wjf3.onrender.com/',
    githubUrl: 'https://github.com/abhiiee-sharma/url-shortner',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'EJS'],
    imageSrc: '/images/shortify.png',
    featured: true
  },
  {
    id: 'project-sdn',
    title: 'SDN DDoS Detection & Mitigation',
    description:
      'Real-time DDoS detection and mitigation system in SDN using machine learning models and dynamic traffic control via Ryu controller (Under Publication at Springer Nature).',
    // githubUrl: 'https://github.com/abhii-14/sdn-ddos-detection',
    technologies: ['Python', 'TensorFlow', 'scikit-learn', 'Ryu SDN', 'OpenFlow'],
    imageSrc: '/images/ddos.png',
    featured: true
  }
];

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  externalUrl,
  githubUrl,
  technologies,
  imageSrc,
  featured
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`mb-8 rounded-lg transition-all duration-300 ${featured ? 'md:flex md:gap-8 md:items-start' : ''}`}
      style={{
        boxShadow: isHovered ? '0 0 25px -10px rgba(81, 199, 202, 0.3)' : 'none',
        background: isHovered ? 'rgba(20, 30, 48, 0.6)' : 'transparent',
        backdropFilter: isHovered ? 'blur(5px)' : 'none',
        border: isHovered ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid transparent',
        padding: isHovered ? '16px' : '8px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {imageSrc && featured && (
        <div className="w-full md:w-2/5 mb-4 md:mb-0">
          <div className="relative rounded-lg overflow-hidden w-full aspect-video">
            <Image
              src={imageSrc}
              alt={`${title} project screenshot`}
              fill
              className="object-cover transition-transform duration-300"
              style={{
                transform: isHovered ? 'scale(1.05)' : 'scale(1)'
              }}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div 
              className="absolute inset-0 transition-opacity duration-300" 
              style={{
                background: 'linear-gradient(135deg, rgba(81, 199, 202, 0.1), transparent)',
                opacity: isHovered ? 1 : 0
              }}
            />
          </div>
        </div>
      )}

      <div className={featured ? 'w-full md:w-3/5' : ''}>
        <h3 className="text-xl font-semibold mb-3 flex items-center" style={{ color: isHovered ? '#51C7CA' : 'white' }}>
          {title}
          {externalUrl && (
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex ml-2 transition-colors"
              style={{ color: isHovered ? '#51C7CA' : 'white' }}
              aria-label={`Visit ${title} website`}
            >
              <ExternalLinkIcon className="w-5 h-5" />
            </a>
          )}
        </h3>

        <p className="mb-4 text-sm text-slate-300 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={`${title.toLowerCase().replace(/\s/g, '-')}-${tech}`}
              className="text-xs py-1 px-2 rounded-full transition-colors"
              style={{
                backgroundColor: isHovered ? 'rgba(20, 30, 60, 0.6)' : 'rgba(20, 30, 60, 0.8)',
                color: isHovered ? '#51C7CA' : 'white',
                border: '1px solid rgba(81, 199, 202, 0.3)'
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center transition-colors"
            style={{ color: isHovered ? '#51C7CA' : 'white' }}
            aria-label={`View ${title} source code on GitHub`}
          >
            <GitHubIcon className="w-5 h-5 mr-2" />
            <span>View Code</span>
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-8">
      {/* <h2 className="text-3xl font-bold text-slate-200 mb-10 tracking-tight">Projects</h2> */}

      <div>
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}

        {otherProjects.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white mb-6">Other Noteworthy Projects</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <OtherProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Separate component for other projects to properly use React hooks
const OtherProjectCard: React.FC<ProjectProps> = (project) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="p-5 rounded-lg transition-all duration-300"
      style={{
        boxShadow: isHovered ? '0 0 20px -5px rgba(81, 199, 202, 0.25)' : 'none',
        background: isHovered ? 'rgba(20, 30, 48, 0.6)' : 'rgba(20, 30, 48, 0.9)',
        backdropFilter: isHovered ? 'blur(5px)' : 'none',
        border: isHovered ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid transparent',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h4 className="font-medium flex items-center" style={{ color: isHovered ? '#51C7CA' : 'white' }}>
        {project.title}
        {project.externalUrl && (
          <a
            href={project.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex ml-2 transition-colors"
            style={{ color: isHovered ? '#51C7CA' : 'white' }}
            aria-label={`Visit ${project.title} website`}
          >
            <ExternalLinkIcon className="w-4 h-4" />
          </a>
        )}
      </h4>

      <p className="my-2 text-sm text-slate-300 leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.technologies.map((tech) => (
          <span
            key={`${project.id}-${tech}`}
            className="text-xs py-1 px-2 rounded-full transition-colors"
            style={{
              backgroundColor: 'rgba(20, 30, 60, 0.8)',
              color: isHovered ? '#51C7CA' : 'white',
              border: '1px solid rgba(81, 199, 202, 0.3)'
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex mt-3 items-center transition-colors"
          style={{ color: isHovered ? '#51C7CA' : 'white' }}
          aria-label={`View ${project.title} source code on GitHub`}
        >
          <GitHubIcon className="w-4 h-4 mr-1" />
          <span className="text-sm">View Code</span>
        </a>
      )}
    </div>
  );
};

export default Projects;