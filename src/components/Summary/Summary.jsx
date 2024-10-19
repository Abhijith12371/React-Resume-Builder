import React from "react";
import "./summary.css"
const Summary = (props) => {
  return (
    <>
      <div className="summary">
        <h1>{props.data.name}</h1>
        <p>
          {props.data.description}
        </p>
      </div>
      <div className="quotaion">
        <p>
          "Innovation distinguishes between a leader and a follower." <h3>Steve
          Jobs</h3>
        </p>
      </div>
    </>
  );
};

export default Summary;
