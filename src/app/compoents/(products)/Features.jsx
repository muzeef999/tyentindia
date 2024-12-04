import React from 'react'
import plates from '@/asserts/nmp/NMP5ECOMODE.webp'
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';

const Features = () => {


    const features = [
        {
          title: "11 Japanese Plates",
          description: "The Tyent NMP-7 features seven platinum-coated, 99.99% pure solid hybrid mesh electrode/plates crafted with advanced Japanese technology, ensuring stable oxygen levels, -ORP up to -950*, and superior micro-clustering. Includes 15-year warranty, 45+ years lifespan.",
          icon: plates, // Replace with the actual path to your icon
        },
        {
          title: "Advanced Power Supply",
          description: "Tyent’s patented SMPS Plus power system, with 55+ adjustable settings, ensures consistent performance. Exclusively designed for ionizers, it allows Tyent to produce strong alkaline (11.5-2.5 pH) and acidic water without chemicals, enhancing both efficiency and lifespan.",
          icon: plates, // Replace with the actual path to your icon
        },
        {
          title: "Produces 7 Water Levels",
          description: "The Tyent NMP-7 water ionizer produces a continuous stream of 7 different water levels,ranging from strong alkaline water (11.5 pH) to strong acidic water (2.5 pH). This versatile ionizer meets all your family’s needs, providing pH levels for drinking, cleaning, and more.",
          icon: plates, // Replace with the actual path to your icon
        },
        {
          title: "Largest One-Touch Display",
          description: "The Tyent NMP-7 ionizer offers the industry’s largest full-color LCD display with clear voice prompts. With a single touch, choose from 7 ionized water types, ensuring effortless and efficient hydration.",
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
    <div>
      <Row className="mb-5">
        {features.map((feature, idx) => (
          <Col md={6} key={idx} className="d-flex justify-content-center align-items-center">
            <Image
              src={feature.icon}
              alt={feature.title} width={200}
            />
            <hr
  style={{
    margin: "8px",
    height: "15vh", // 15% of viewport height
    width: ".5vw",  // 0.5% of viewport width
    border: "none", // Remove default border
    backgroundColor: "#008AC7",
  }}
/>
                  <div>
            <h3 style={{color:'#008AC7', fontWeight:500}}>{feature.title}</h3>
            <p style={{fontSize:'14px'}}>{feature.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Features
