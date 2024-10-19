import React from "react";
import "./skills.css";
import Languages from "./Languages";

const skills = (props) => {
  // const Frameworks={name:props.data.frameworks}
  return (
    <>
      <div className="Skills">
        <h1 className="border">Skills</h1>
        <div className="Programming">
          <div className="heading flex">
            <i class="fa-solid fa-code"></i>
            <h2>Programming Languages</h2>
          </div>
          <div className="skillContainer">
          {
            props.data.programmingLanguages.map(e=>{
              return (
                <>
                {<Languages no_stars={e.rating} Name={e.name}/>}
                {console.log(e.name)}
                </>
              )
            })
          }
          </div>
          
        </div>
        <div className="FrameWorks">
          <div className="heading flex">
            <i class="fa-solid fa-layer-group"></i>
            <h2>Frameworks</h2>
          </div>
          {
            props.data.frameworks.map(e=>{
              return (
                <>
                <Languages no_stars={e.rating} Name={e.name}/>
                </>
              )
            })
          }
        </div>

      </div>
    </>
  );
};

export default skills;
