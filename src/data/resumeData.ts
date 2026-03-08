import { ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
  contact: {
    name: 'Tony Padovano',
    title: 'Software Architect',
    email: 'tony@example.com',
    phone: '(555) 123-4567',
    location: 'New York, NY',
    linkedin: 'linkedin.com/in/tonypadovano',
    github: 'github.com/tonypadovano-home',
  },
  summary:
    'Experienced Software Architect with 10+ years of experience designing and building scalable, cloud-native applications. Proven track record of leading cross-functional engineering teams and delivering high-impact systems. Deep expertise in microservices architecture, API design, and cloud platforms.',
  experience: [
    {
      company: 'Acme Corporation',
      title: 'Principal Software Architect',
      startDate: 'Jan 2020',
      endDate: 'Present',
      location: 'New York, NY',
      highlights: [
        'Designed and led the migration of a monolithic e-commerce platform to a microservices architecture, reducing deployment time by 70%',
        'Established architecture standards, patterns, and best practices adopted by 5 engineering teams (50+ engineers)',
        'Architected a real-time event streaming platform processing 10M+ events/day using Apache Kafka',
        'Reduced cloud infrastructure costs by 40% through architecture optimization and rightsizing',
      ],
    },
    {
      company: 'Tech Innovations Inc.',
      title: 'Senior Software Engineer',
      startDate: 'Mar 2016',
      endDate: 'Dec 2019',
      location: 'New York, NY',
      highlights: [
        'Built and maintained RESTful and GraphQL APIs serving 1M+ daily active users',
        'Led a team of 6 engineers to deliver a customer-facing analytics dashboard on time and within budget',
        'Introduced CI/CD pipelines reducing release cycles from monthly to daily deployments',
        'Mentored 4 junior engineers, two of whom were promoted to senior roles',
      ],
    },
    {
      company: 'StartupXYZ',
      title: 'Software Engineer',
      startDate: 'Jun 2013',
      endDate: 'Feb 2016',
      location: 'San Francisco, CA',
      highlights: [
        'Developed core product features using React and Node.js in a fast-paced startup environment',
        'Implemented OAuth 2.0 authentication system and third-party integrations',
        'Participated in architecture reviews and contributed to technical roadmap planning',
      ],
    },
  ],
  education: [
    {
      institution: 'New York University',
      degree: 'Master of Science',
      field: 'Computer Science',
      graduationDate: 'May 2013',
      location: 'New York, NY',
      honors: 'Summa Cum Laude',
    },
    {
      institution: 'State University of New York',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      graduationDate: 'May 2011',
      location: 'Albany, NY',
    },
  ],
  skills: [
    {
      category: 'Architecture & Design',
      skills: ['Microservices', 'Event-Driven Architecture', 'Domain-Driven Design', 'API Design', 'System Design'],
    },
    {
      category: 'Cloud & Infrastructure',
      skills: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform'],
    },
    {
      category: 'Languages & Frameworks',
      skills: ['TypeScript', 'Python', 'Java', 'React', 'Node.js', 'Spring Boot'],
    },
    {
      category: 'Data & Messaging',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Apache Kafka', 'RabbitMQ'],
    },
  ],
};
