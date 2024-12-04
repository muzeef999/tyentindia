import Image from 'next/image';
import waterIonizer from '../../../asserts/bgcontact.png';
import { Col, Row } from 'react-bootstrap';
import { SiTicktick } from 'react-icons/si';
import "../../style/AppBar.css";

const WhyTyent = () => {
  return (
    <section className="container py-5">
      <Row className="align-items-center">
        {/* Left Section */}
        <Col md={6} className="mb-4">
          <h2 style={{ fontSize: '42px', fontWeight: '500' }}>
            Why <span style={{ color: '#008AC7', fontWeight: '600', fontSize: '72px' }}>Tyent ?</span>
          </h2>
          <p style={{ fontSize: '20px' }}>
            With over three decades of expertise, Tyent delivers the most advanced, slim, and sleek water ionizers with updated Japanese technology, available in{' '}
            <span style={{ color: '#008AC7' }}>86+ countries</span> and renowned for exceptional customer satisfaction worldwide.
          </p>
          <div className="mt-4">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/FKL-ndta3xE?si=NHY8-rR62itq8kcg&autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              style={{
                borderRadius: '15px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </Col>

        {/* Right Section */}
        <Col md={6} className="d-flex flex-column justify-content-between">
          {/* Direct Delivery */}
          <Row>
            <Col xs={1} className="text-center">
              <div className="whytentfont">
                <SiTicktick size={20} color="#008AC7" />
              </div>
            </Col>
            <Col xs={11}>
              <h3 style={{ fontWeight: '700', color: '#008AC7' }}>Direct Delivery</h3>
              <p style={{ fontSize: '20px' }}>
                At Tyent we follow a traditional marketing approach, ensuring direct delivery through our authorized distributors without involving MLM or commission agents.
              </p>
            </Col>
          </Row>

          {/* Advanced Technology */}
          <Row>
            <Col xs={1} className="text-center">
              <div className="whytentfont">
                <SiTicktick size={20} color="#008AC7" />
              </div>
            </Col>
            <Col xs={11}>
              <h3 style={{ fontWeight: '700', color: '#008AC7' }}>Advanced Technology</h3>
              <p style={{ fontSize: '20px' }}>
                Every Tyent water ionizer features advanced Japanese technology plates from Permelac, Japan, and a patented SMPS PLUS power supply, delivering pure, healthy water
                without the use of chemicals, enhancers, or salts.
              </p>
            </Col>
          </Row>

          {/* Affordable and Transparent */}
          <Row >
            <Col xs={1} className="text-center">
              <div className="whytentfont">
                <SiTicktick size={20} color="#008AC7" />
              </div>
            </Col>
            <Col xs={11}>
              <h3 style={{ fontWeight: '700', color: '#008AC7' }}>Affordable and Transparent</h3>
              <p style={{ fontSize: '20px' }}>
                Tyent water ionizers are available at affordable prices, offering 100% transparency and doorstep service to ensure maximum customer satisfaction and unwavering
                brand trust.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default WhyTyent;
