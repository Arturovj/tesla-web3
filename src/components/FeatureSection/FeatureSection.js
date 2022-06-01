import React from "react";
import data from "../../data/data.json";
import FeatureBox from "../FeatureBox/FeatureBox";
import Feature from "../Pages/Feature";
import "./FeatureSection.css";
import { motion } from "framer-motion/dist/framer-motion";

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    duration: 5,
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 10,
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
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ staggerChildren: 0.1 }}
                variants={imageAnimate}
              >
                {/* <motion.ul variants={container} initial="hidden" animate="show"> */}
                  <div className="row">
                    
                    {data.map((featureReview, index) => (
                      <FeatureBox featureReview={featureReview} key={index} />
                    ))}
                  
                  </div>
                {/* </motion.ul> */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
