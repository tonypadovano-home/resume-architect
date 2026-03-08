import { EducationItem } from '../types/resume';
import { Section } from './Section';
import './EducationSection.css';

interface Props {
  education: EducationItem[];
}

export function EducationSection({ education }: Props) {
  return (
    <Section title="Education">
      {education.map((item, index) => (
        <div key={index} className="education-item">
          <div className="education-header">
            <div className="education-left">
              <span className="education-institution">{item.institution}</span>
              <span className="education-degree">
                {item.degree} in {item.field}
                {item.honors && <span className="education-honors"> — {item.honors}</span>}
              </span>
            </div>
            <div className="education-right">
              <span className="education-date">{item.graduationDate}</span>
              <span className="education-location">{item.location}</span>
            </div>
          </div>
        </div>
      ))}
    </Section>
  );
}
