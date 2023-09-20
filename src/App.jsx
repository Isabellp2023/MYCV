import {useState} from 'react'
import './App.css';
import {CV} from "./CV/CV";
import Hero from "./componets/Hero/Hero";
import About from "./componets/About/About";
import Education from "./componets/Education/Education";
import Experience from "./componets/Experience/Experience";
import More from "./componets/More/More";



const { hero,  education, experience, languages, habilities, volunteer } = CV;


  

 const App = () => {
  const [showEducation, setShowEducation] = useState( true);
    return (
      <div className='App'>
        <Hero hero={hero}/>
        <About hero={hero}/>
        <button onClick={() => setShowEducation(true)}>Education</button>
        <button onClick={() => setShowEducation(false)}>Experience</button>
        {showEducation ? (
         <Education education={education} />
         ) : (
         <Experience experience={experience}/>

         )}
         
        <More 
         languages={languages}
         habilities={habilities}
         volunteer={volunteer}
      />
      </div>
       
    );    
  };

  


export default App
