import React from "react";
import "./FeatureBox.css";

export default function FeatureBox(props) {
  const { featureReview } = props;

  return (
    
      <div className={`${featureReview.bootstrap}`}>
        <div className="icon-box">
          <i className={`${featureReview.icon}`}></i>
          <p className="service-title">
            <a href="#">{featureReview.title}</a>
          </p>
          <p className="service-para">{featureReview.service}</p>
        </div>
        </div>
     
       
  );
}
