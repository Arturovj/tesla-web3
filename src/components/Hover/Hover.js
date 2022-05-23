import React from "react";
import "./Hover.scss";
import { Link as Scroll } from "react-scroll";

export default function Hover() {
  return (
    <>
      <div className="all">
        <div className="lefter">
          <Scroll
            to="features"
            spy={true}
            smooth={true}
            offset={40}
            duration={500}
          >
            <div className="text"></div><span style={{
              visibility: 'hidden'
            }}>FEATURESSSSSSSSSS<br/>
            FEATURESSSSSSSSSS<br/>
            FEATURESSSSSSSSSS<br/>
            FEATURESSSSSSSSSS<br/>
            FEATURESSSSSSSSSS<br/>
            FEATURESSSSSSSSSS<br/>
            </span>
            
          </Scroll>
        </div>

        <div className="left">
          <div className="text"></div>
        </div>
        <div className="center">
          <div className="explainer">
            <span>Welcome</span>
          </div>
          <div className="text"></div>
        </div>
        <div className="right">
          <div className="text"></div>
        </div>
        <div className="righter">
          <div className="text"></div>
        </div>
      </div>
    </>
  );
}
