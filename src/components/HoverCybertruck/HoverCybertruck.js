import React from 'react'
import { Link } from 'react-router-dom'
import './HoverCybertruck.scss'

export default function HoverCybertruck() {
  return (
    <>
    <div className="all">
<div className="lefterCybertruck">
  <div className="text"></div>
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
  <div className="explainer"><span>Cybertruck</span></div>
  <div className="text"></div>
  </div>
<div className="right">
  <div className="text"></div>
</div>
<div className="righterCybertruck">
  <div className="text"></div>
</div>
</div>
    </>
  )
}
