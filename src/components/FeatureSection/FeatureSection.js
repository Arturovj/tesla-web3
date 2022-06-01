import React from "react";
import data from "../../data/data.json";
import FeatureBox from "../FeatureBox/FeatureBox";

import "./FeatureSection.css";
import { motion } from 'framer-motion/dist/framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function FeatureSection() {
  return (
    <>
      <div>
      
        <div className="service-section py-5" id="features">
          <div className="container">
            <div className="row justify-content-center py-3">
              <div className="col-md-8 col-12 text-center">
                <p className="service-main-heading">Features</p>
              </div>
            </div>
          </div>

     
          
          <div className="features col-md-8 col-12">
            {data.map((featureReview, index) => (
              <FeatureBox featureReview={featureReview} key={index} />
            ))}
          
          </div>
          
        </div>
      </div>

    </>
  );
}
