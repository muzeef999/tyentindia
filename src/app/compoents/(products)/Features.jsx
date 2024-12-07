"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Features = ({data, delay }) => {

  useEffect(() => {
    Aos.init({
      duration: 1000, // You can customize duration or other settings here
    });
  }, []);



  return (
      <div
          key={data.id}
          data-aos="fade-up" // AOS animation for fade-up
          data-aos-delay={delay } // Delay to stagger the animations
        >
          <div className="custom-card">
            <div className="d-flex justify-content-center align-items-center">
              <div style={{ width: '100%' }}>
                <Image
                  src={data.icon}
                  alt={data.title}
                  layout="responsive"
                  width={100} // Set a fixed width to maintain consistency
                  height={100} // Set a fixed height to maintain aspect ratio
                  priority
                  placeholder="blur"
                />
              </div>
              <hr
                style={{
                  margin: '8px',
                  height: '15vh',
                  width: '.5vw',
                  border: 'none',
                  backgroundColor: '#008AC7',
                }}
              />
              <div>
                <h4 style={{ color: '#008AC7', fontWeight: 500 }}>{data.title}</h4>
                <p style={{ fontSize: '14px' }}>{data.description}</p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Features
