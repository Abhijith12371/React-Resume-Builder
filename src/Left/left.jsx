import React from 'react';
import './left.css';
import Summary from '../components/Summary/Summary';
import PersonalInfo from '../components/personalInfo/PersonalInfo';
import Hobbies from '../components/Hobbies/Hobbies';
import Projects from '../components/Projects/Projects';
import Certifications from '../components/Certifications/Certifications';
const Left = (props) => {
  return (
    <div className='left'>
      {console.log(props.data)}
      <Summary  data={props.data}/>
      <PersonalInfo data={props.data}/>
      <Hobbies data={{hobbies:props.data.hobbies}}/>
      <Projects data={{projects:props.data.projects}}/>
      <Certifications data={{certificate:props.data.certifications}}/>
    </div>
  );
};

export default Left;
