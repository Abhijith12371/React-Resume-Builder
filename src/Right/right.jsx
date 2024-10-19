import React from 'react'
import Skills from '../components/Skills/skills'
import Work from '../components/Work/Work'
import Certifications from '../components/Certifications/Certifications'

const right = (props) => {
  return (
    <div className='right'>
     <Skills data={props.data}/>
     <Work data={props.data}/>
    
    </div>
  )
}

export default right
