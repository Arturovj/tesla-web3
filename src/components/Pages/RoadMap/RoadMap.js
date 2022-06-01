import React from 'react'
import "./RoadMap.css"

export default function Roadmap() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="roadmap">
            <div className="roadmap-content text-center" style={{ marginTop: "100px" }}>
              <span className='gradient-text'>Tesla Roadmap</span>
              <h2 className='text-white my-2'>Our Tesla Roadmap</h2>
              <p className='roadmap-text text-light'>Our ICO Template Will Be A Perfect Platform For Presenting Your Ico Launch. This Landing Page Comes In Great And Clean Design</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="main-timeline">
                <div className="timeline">
                  <div className="icon"></div>
                  <div className='date-content'>
                    <div className='date-outer'>
                      <span className='date'>
                        <span className='month'>22 sep</span>
                        <span className='year'>2022</span>
                      </span>
                    </div>
                  </div>
                  <div className='timeline-content'>
                    <h5 className='title'>Cybertruck</h5>
                    <p className='description text-light-gray'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.</p>
                  </div>
                </div>
                <div className="timeline">
                  <div className="icon"></div>
                  <div className='date-content'>
                    <div className='date-outer'>
                      <span className='date'>
                        <span className='month'>22 sep</span>
                        <span className='year'>2025</span>
                      </span>
                    </div>
                  </div>
                  <div className='timeline-content'>
                    <h5 className='title'>Starlink</h5>
                    <p className='description text-light-gray'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.</p>
                  </div>
                </div>
                <div className="timeline">
                  <div className="icon"></div>
                  <div className='date-content'>
                    <div className='date-outer'>
                      <span className='date'>
                        <span className='month'>22 sep</span>
                        <span className='year'>2027</span>
                      </span>
                    </div>
                  </div>
                  <div className='timeline-content'>
                    <h5 className='title'>SpaceX</h5>
                    <p className='description text-light-gray'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.</p>
                  </div>
                </div>
                <div className="timeline">
                  <div className="icon"></div>
                  <div className='date-content'>
                    <div className='date-outer'>
                      <span className='date'>
                        <span className='month'>22 sep</span>
                        <span className='year'>2030</span>
                      </span>
                    </div>
                  </div>
                  <div className='timeline-content'>
                    <h5 className='title'>Mars</h5>
                    <p className='description text-light-gray'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}