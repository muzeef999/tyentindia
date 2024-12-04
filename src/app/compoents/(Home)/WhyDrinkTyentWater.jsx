import React from "react";
import { Col, Row } from "react-bootstrap";
import '../../style/WhyDrinkTyentWater.css'; // External CSS file for styling

const WhyDrinkTyentWater = () => {
  const cardDetails = [
    {
      title: "Alkalinity",
      content: `
        Acidic stress is the root cause of all the major lifestyle diseases 
        such as Diabetes, Thyroid, Gastric, Constipation, Acidity, Cancer, 
        Cardiovascular diseases, Chronic respiratory diseases, and Coronary 
        heart diseases. 

        Tyent ionized hydrogen alkaline water is alkaline in nature (with a 
        pH value of drinking water 7pH - 9.5pH) which helps in neutralizing 
        disease-causing acidic nature.
      `,
    },
    {
      title: "Micro-clustered water",
      content: `
        Tyent ionized hydrogen-rich alkaline water is Micro-clustered water. 
        Due to its micro-clustered property, it penetrates faster to all cells 
        and major organs in the human body than regular tap or RO water.

        Tyent Micro-clustered water provides better penetration, better hydration, 
        better detox, and faster supply of minerals.
      `,
    },
    {
      title: "Anti-oxidant Molecular H2",
      content: `
        Tyent ionized hydrogen-rich alkaline water has a selective antioxidant 
        called Molecular hydrogen. Molecular hydrogen is rich in electrons or -ORP 
        which helps in neutralizing free radicals (ROS) and oxidative stress.

        It also helps in reducing inflammation, protecting against oxidative stress, 
        enhancing athletic performance, and supporting gut health too.
      `,
    },
    {
      title: "Natural minerals",
      content: `
        Tyent ionized hydrogen-rich alkaline water is rich in alkaline minerals 
        such as calcium, magnesium, potassium, and sodium.

        Alkaline minerals help in promoting bone health, aiding muscle function, 
        supporting cardiovascular health, boosting immune function, and enhancing 
        metabolism.
      `,
    },
  ];
 
  return (
    <div className="container">
      <Row className="align-items-center">
        {/* Left side text */}
        <Col xs={12} md={4} className="text-start mb-3 mb-md-0">
          <h2 style={{fontWeight:700}} className="d-inline-block">
            Why To Drink <span style={{ color: '#008AC7' }}>Tyent</span> <br/> Water ?
          </h2>
        </Col>

        {/* Right side line with dot */}
        <Col xs={12} md={8} className="text-end">
          <div className="d-flex align-items-center justify-content-end">
            <hr style={{ flex: 1, borderTop: '2px solid #008AC7', margin: '0 10px' }} />
            <div
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: '#008AC7',
                borderRadius: '50%',
              }}
            ></div>
          </div>
        </Col>
      </Row>
      <br/>
      <br/>
      <Row className="g-4">
        {cardDetails.map((card, index) => (
          <Col key={index} xs={12} sm={6} md={3}>
            <div className="custom-card d-flex flex-column">
              <div className="card-body">
                <h4 className="card-title">{card.title}</h4>
                <p className="card-content">{card.content}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default WhyDrinkTyentWater;
