import React from "react";
import "./Hover.scss";
import { Link as Scroll } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";

export default function Hover() {
  let navigate = useNavigate()

  

  return (
    <>
      <div className="all">
        <div className="lefter">
          <Scroll
            to="features"
            spy={true}
            smooth={true}
            offset={10}
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
          <Link to="/shop">
          <div className="text"></div><span style={{
              visibility: 'hidden'
            }}>FEATURESSSSSSSSSS<br/>
            FEATURESSSSSSSSSS<br/>
            FEATURESSSSSSSSSS<br/>
            FEATURESSSSSSSSSS<br/>
            FEATURESSSSSSSSSS<br/>
            FEATURESSSSSSSSSS<br/>
            </span>
          
          <div className="text"></div>
          </Link>
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
