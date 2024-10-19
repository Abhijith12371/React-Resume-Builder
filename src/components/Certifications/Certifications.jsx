import React from "react";
import "./certifications.css";
import Certificate from "./Certificate";
const Certifications = (props) => {
  return (
    <div className="certifications">
      <div className="certifications-heading">
        <h2 className="border certificate">
          <i className="fa-solid fa-certificate"></i> Certifications
        </h2>
        <div className="certification-list">
            {
              props.data.certificate.map(e=>{
                return (
                  <>
                  <Certificate title={e.certificateName} issued={e.issuedBy} description={e.description}/>
                  </>
                )
              })
            }
        </div>
      </div>
    </div>
  );
};

export default Certifications;
