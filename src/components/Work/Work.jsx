import React from "react";
import "./work.css";
import Experience from "./Experience";

const Work = (props) => {
  return (
    <div className="work">
      <div className="workheading">
        <h2 className="border history">
          <i className="fa-solid fa-briefcase "></i>Work History
        </h2>
        {console.log(props.data.workHistory)}
        {props.data.workHistory.map((e) => {
          return (
            <Experience
              key={e.id}
              company={e.companyName}
              role={e.role}
              achievement={e.achievement}
              technologies={e.technologiesUsed}
              description={e.description}
              startDate={e.startDate}
              endDate={e.endDate}
            />
          );
        })}
      </div>

    </div>
  );
};

export default Work;
