"use client"
import React, { useEffect } from 'react'
import plates from '@/asserts/nmp/NMP5ECOMODE.webp'
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Features = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000, // You can customize duration or other settings here
    });
  }, []);


    const features = [
        {
          title: "11 Japanese Plates",
          description: "The Tyent NMP-7 features seven platinum-coated, 99.99% pure solid hybrid mesh electrode/plates crafted with advanced Japanese technology, ensuring stable oxygen levels, -ORP up to -950*, and superior micro-clustering. Includes 15-year warranty, 45+ years lifespan.",
          icon: plates, // Replace with the actual path to your icon
        },
        {
          title: "Advanced Power Supply",
          description: "Tyent's patented SMPS Plus power system, with 55+ adjustable settings, ensures consistent performance. Exclusively designed for ionizers, it allows Tyent to produce strong alkaline (11.5-2.5 pH) and acidic water without chemicals, enhancing both efficiency and lifespan.",
          icon: plates, // Replace with the actual path to your icon
        },
        {
          title: "Produces 7 Water Levels",
          description: "The Tyent NMP-7 water ionizer produces a continuous stream of 7 different water levels,ranging from strong alkaline water (11.5 pH) to strong acidic water (2.5 pH). This versatile ionizer meets all your family’s needs, providing pH levels for drinking, cleaning, and more.",
          icon: plates, // Replace with the actual path to your icon
        },
        {
          title: "Largest One-Touch Display",
          description: "The Tyent NMP-7 ionizer offers the industry's largest full-color LCD display with clear voice prompts. With a single touch, choose from 7 ionized water types, ensuring effortless and efficient hydration.",
          icon: plates, // Replace with the actual path to your icon
        },
        {
          title: "PAST Cleaning Technology",
          description:
            "Tyent Water Ionizers use advanced Polarity Anti Scale Technology (PAST) for automated cleaning. Timer and sensor activation reduce mineral buildup on electrodes, enhancing durability and consistently delivering healthy, ionized water.",
          icon: plates, // Replace with the actual path to your icon
        },
        {
          title: "Fixed Quantity Output",
          description:
            "Tyent water ionizers are engineered for modern convenience, featuring the fixed quantity output function. It delivers accurate quantity of 0.5L, 1.0L, or 1.5L, making hydration and cooking effortless and accurate for daily use.",
          icon: plates, 
        },
        {
          title: "ECO Mode",
          description:
            "The Tyent water ionizer’s features Eco Mode, enhancing energy efficiency with up to 99.9% savings. It reduces power consumption by automatically turning off the LCD backlight during idle periods, ensuring optimal performance while conserving electricity.",
          icon: plates, // Replace with the actual path to your icon
        },
        {
          title: "Real-Time Filter Indication",
          description: "The Tyent water ionizer’s features a user-friendly LCD display that tracks real-time filter usage, alerting you when replacements are needed. This convenient monitoring system helps maintain optimal performance and ensures clean, healthy water at all times.",
          icon: plates, // Replace with the actual path to your icon
        },
      ];

  return (
    <div className="container">
    <div className="row g-3">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="col-md-6"
          data-aos="fade-up" // AOS animation for fade-up
          data-aos-delay={idx * 100} // Delay to stagger the animations
        >
          <div className="custom-card">
            <div className="d-flex justify-content-center align-items-center">
              <div style={{ width: '100%' }}>
                <Image
                  src={feature.icon}
                  alt={feature.title}
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
                <h4 style={{ color: '#008AC7', fontWeight: 500 }}>{feature.title}</h4>
                <p style={{ fontSize: '14px' }}>{feature.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Features
