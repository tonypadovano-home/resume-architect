import { Section } from './Section';
import './SummarySection.css';

interface Props {
  summary: string;
}

export function SummarySection({ summary }: Props) {
  return (
    <Section title="Summary">
      <p className="summary-text">{summary}</p>
    </Section>
  );
}
