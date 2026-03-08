import { ContactInfo } from '../types/resume';
import './Header.css';

interface Props {
  contact: ContactInfo;
}

export function Header({ contact }: Props) {
  return (
    <header className="resume-header">
      <h1 className="resume-name">{contact.name}</h1>
      <p className="resume-title">{contact.title}</p>
      <div className="contact-info">
        <span>{contact.email}</span>
        <span className="divider">|</span>
        <span>{contact.phone}</span>
        <span className="divider">|</span>
        <span>{contact.location}</span>
        {contact.linkedin && (
          <>
            <span className="divider">|</span>
            <span>{contact.linkedin}</span>
          </>
        )}
        {contact.github && (
          <>
            <span className="divider">|</span>
            <span>{contact.github}</span>
          </>
        )}
      </div>
    </header>
  );
}
