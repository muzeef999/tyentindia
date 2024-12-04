// components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-dark py-5">
      <Container>
        <Row>
          {/* Column 1: Products */}
          <Col xs={12} md={3} className="mb-4">
            <h5 style={{ color: "#008AC7" }}>Products</h5>
            <ul className="list-unstyled">
              <li>Counter-Top Water Ionizers</li>
              <li>Under-Counter Water Ionizers</li>
              <li>H2-Hybrid series</li>
              <li>Replacement Filters</li>
              <li>Tyent TMX Beauty Soap</li>
              <li>Stainless Steel Water Bottles</li>
            </ul>
          </Col>

          {/* Column 2: Customers */}
          <Col xs={12} md={3} className="mb-4">
            <h5 style={{ color: "#008AC7" }}>Customers</h5>
            <ul className="list-unstyled">
              <li>Dealer Opportunity</li>
              <li>Usage Instructions</li>
              <li>Health Benefits</li>
              <li>Testimonies</li>
              <li>Why Tyent</li>
            </ul>
          </Col>

          {/* Column 3: Technical Information */}
          <Col xs={12} md={3} className="mb-4">
            <h5 style={{ color: "#008AC7" }}>Technical Information</h5>
            <ul className="list-unstyled">
              <li>Tyent Vs Enagic Kangen</li>
              <li>Tyent’s Solid Hybrid Mesh Plates</li>
              <li>Tyent’s Patented SMPS PLUS</li>
              <li>Tyent’s .01 Micron Filters</li>
              <li>Tyent Warranty</li>
            </ul>
          </Col>

          {/* Column 4: Product Sales & Service */}
          <Col xs={12} md={3} className="mb-4">
            <h5 style={{ color: "#008AC7" }}>Product Sales & Service</h5>
            <ul className="list-unstyled">
              <li>Product Demo: 9182-41-41-81</li>
              <li>Product Support: <a href="mailto:Sravan@medilightindia.com">Sravan@medilightindia.com</a></li>
              <li>Complaints: 912-12-12-555</li>
              <li>Technical Support: <a href="mailto:Technical@MedilightIndia.com">Technical@MedilightIndia.com</a></li>
            </ul>
          </Col>
        </Row>

        <hr/>

        {/* Footer Bottom */}
        <Row className="align-items-center">
          {/* Left Side: Copyright Text */}
          <Col xs={12} md={6} className="text-left">
            <p>© Tyent USA 2007-2025. All Rights Reserved.</p>
          </Col>

          {/* Right Side: Social Media Icons */}
          <Col xs={12} md={6} className="text-right">
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebook size={30} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin size={30} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaTwitter size={30} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram size={30} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaYoutube size={30} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
