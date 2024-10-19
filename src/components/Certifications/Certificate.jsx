import React from 'react'

const Certificate = (props) => {
  return (
    <div>
                <div className="certification-item">
            <h4 className="cert-title">
              <i className="fa-solid fa-file"></i> {props.title}
            </h4>
            <div className="cert-details">
              <div className="cert-info">
                <span className="cert-label">Issued by:</span>
                <span className="cert-value">{props.issued}</span>
              </div>
              {/* <div className="cert-info">
                <span className="cert-label">Description:</span>
                <span className="cert-value">
                  {props.description}
                </span>
              </div> */}
            </div>
          </div>
    </div>
  )
}

export default Certificate
