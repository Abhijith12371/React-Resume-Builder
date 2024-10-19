import React from "react";

const Languages = (props) => {
  // const no_stars=4
  return (
    <div>
        
      <div className="Skill">

        <li>
          <span>{props.Name}</span>
          <div className="rating">
            {Array.from({ length: props.no_stars }).map((index) => {
              return <i class="fa-solid fa-star"></i>;
            })}
            {Array.from({ length: 5 - props.no_stars }).map((index) => {
              return <i class="fa-regular fa-star"></i>;
            })}
          </div>
        </li>
      </div>
      <br />
    </div>
  );
};

export default Languages;
