import { SkillCategory } from '../types/resume';
import { Section } from './Section';
import './SkillsSection.css';

interface Props {
  skills: SkillCategory[];
}

export function SkillsSection({ skills }: Props) {
  return (
    <Section title="Skills">
      <div className="skills-grid">
        {skills.map((category, index) => (
          <div key={index} className="skill-category">
            <span className="skill-category-name">{category.category}:</span>{' '}
            <span className="skill-list">{category.skills.join(', ')}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
