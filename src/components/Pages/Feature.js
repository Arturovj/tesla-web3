import React from 'react'
import './Feature.css'
import { motion } from 'framer-motion/dist/framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      
    },
  },
}

const item = {
  hidden: { opacity: 0},
  show: { opacity: 1}
}





export default function Feature() {
    
  return (
    <>
   
    <div className="service-section py-5" id='features'>
  <div className="container">
    <div className="row justify-content-center py-3">
      <div className="col-md-8 col-12 text-center">
        <p className="service-main-heading">Features</p>
      </div>
    </div>
    <motion.ul
    variants={container}
    initial='hidden'
    animate='show'
    >
    <div className="row">
      <div className="col-md-6 col-lg-6 col-12">
      <motion.li variants={item}>
        <div className="icon-box">
        <i className="fas fa-charging-station service-icon"></i>
          <p className="service-title"><a href="#">Lorem Ipsum</a></p>
          <p className="service-para">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
        </div>
        </motion.li>
        
      </div>
      <div className="col-md-6 col-lg-6 col-12 mt-4 mt-md-0">
      <motion.li variants={item}>
        <div className="icon-box">
          <i className="fa fa-car service-icon"></i>
          <p className="service-title"><a href="#">Dolor Sitema</a></p>
          <p className="service-para">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
        </div>
        </motion.li>
      </div>
      <div className="col-md-6 col-lg-6 col-12 mt-4 mt-md-0">
        <div className="icon-box">
          <i className="fa fa-chart-bar service-icon"></i>
          <p className="service-title"><a href="#">Sed ut perspiciatis</a></p>
          <p className="service-para">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-12 mt-4 mt-md-0">
        <div className="icon-box">
          <i className="fas fa-wrench service-icon"></i>
          <p className="service-title"><a href="#">Nemo Enim</a></p>
          <p className="service-para">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-12 mt-4 mt-md-0">
        <div className="icon-box">
          <i className="fa fa-cog service-icon"></i>
          <p className="service-title"><a href="#">Magni Dolore</a></p>
          <p className="service-para">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-12 mt-4 mt-md-0">
        <div className="icon-box">
          <i className="fa fa-calendar-alt service-icon"></i>
          <p className="service-title"><a href="#">Eiusmod Tempor</a></p>
          <p className="service-para">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
        </div>
      </div>
    </div>
    </motion.ul>
  </div>
</div>

    
    </>
  )
}






