import React from 'react'
import { Link } from 'react-router-dom'
import './HoverCyberquad.scss'

export default function HoverCyberquad() {
  return (
    <>
    <div className="all">
<div className="lefterCyberquad">
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
  <div className="explainer"><span>Cyberquad</span></div>
  <div className="text"></div>
  </div>
<div className="right">
  <div className="text"></div>
</div>
<div className="righterCyberquad">
  <div className="text"></div>
</div>
</div>
    </>
  )
}
