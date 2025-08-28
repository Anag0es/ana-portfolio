import React from 'react';
import { 
  Header, 
  Hero, 
  About, 
  Experience, 
  Projects, 
  Skills, 
  Contact, 
  Footer 
} from './components';
import { 
  personalInfo, 
  experiences, 
  projects, 
  skills, 
  languages, 
  education 
} from './data/mockData';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero personalInfo={personalInfo} />
        <About education={education} languages={languages} />
        <Experience experiences={experiences} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Contact personalInfo={personalInfo} />
      </main>
      <Footer personalInfo={personalInfo} />
    </div>
  );
};

export default App;
