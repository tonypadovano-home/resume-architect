import { ExperienceItem } from '../types/resume';
import { Section } from './Section';
import './ExperienceSection.css';

interface Props {
  experience: ExperienceItem[];
}

export function ExperienceSection({ experience }: Props) {
  return (
    <Section title="Experience">
      {experience.map((item, index) => (
        <div key={index} className="experience-item">
          <div className="experience-header">
            <div className="experience-left">
              <span className="experience-company">{item.company}</span>
              <span className="experience-title">{item.title}</span>
            </div>
            <div className="experience-right">
              <span className="experience-dates">
                {item.startDate} – {item.endDate}
              </span>
              <span className="experience-location">{item.location}</span>
            </div>
          </div>
          <ul className="experience-highlights">
            {item.highlights.map((highlight, hIndex) => (
              <li key={hIndex}>{highlight}</li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
}
