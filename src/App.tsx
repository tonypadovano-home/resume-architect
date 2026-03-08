import { resumeData } from './data/resumeData';
import { Header } from './components/Header';
import { SummarySection } from './components/SummarySection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import './App.css';

function App() {
  return (
    <div className="page-wrapper">
      <div className="resume-container">
        <Header contact={resumeData.contact} />
        <SummarySection summary={resumeData.summary} />
        <ExperienceSection experience={resumeData.experience} />
        <EducationSection education={resumeData.education} />
        <SkillsSection skills={resumeData.skills} />
      </div>
    </div>
  );
}

export default App;
