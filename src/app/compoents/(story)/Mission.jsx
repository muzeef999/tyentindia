import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { FaDroplet } from 'react-icons/fa6';
import animationData from '@/asserts/icons/Business Goal.json'; 
import Lottie from 'react-lottie';
 

const Mission = () => {
    const waterTypes = [
        { name:"To provide innovative water solutions that improve the health and well-being of individuals and families across India.", type: "Health & Wellness", color: "#000"},
        { name:"To promote eco-friendly practices by reducing the dependency on single-use plastics and encouraging sustainable hydration.", type: "Sustainability", color: "#000" },
        { name:"To continuously innovate and deliver cutting-edge water ionization and purification systems.", type: "Technology Leadership", color: "#000"},
        { name:"To prioritize customer satisfaction by offering exceptional service, from product selection to after-sales support.", type: "Customer-Centric Approach", color: "#000"},
        { name:"To educate communities about the benefits of alkaline water and its role in fostering a healthier lifestyle.", type: "Education & Awareness", color: "#000"},
 
      ]; 


      const defaultOptions = {
        loop: true, // You can set loop: true for continuous loop
        autoplay: true, // Start automatically
        animationData: animationData, // Import the JSON animation data
      };
    
      return (
        <div className='container'>
       

<center>
  <div>
  <Lottie options={defaultOptions} width={100} height={100} style={{display: 'inline-block', verticalAlign: 'middle'}} />
  <h1 className='text-center' style={{ color: '#008AC7', fontWeight: '600',margin:'0', display: 'inline-block', verticalAlign:'middle',}}>
      Mission
  </h1>  
</div>
</center>



          <p className='text-center' style={{fontSize:'14px', fontWeight:500}}>
          Together, we aim to make every drop of water count towards a better, <br/> healthier future for India.
          </p>
          
    
        <Row className="justify-content-center ">
          {waterTypes.map((type, idx) => (
            <Col  style={{backgroundColor:"#e9f4fb", borderRadius:'30px', margin:'10px', padding:'15px'}}
              md={3}
              sm={6}
              xs={12}
              key={idx}
              className="d-flex   justify-content-center align-items-center mb-4"
            >
    
              {/* Water Type Details */}
              <div>
              <div className='d-flex'>   <FaDroplet  size={20} />
                <h6
                  style={{
                    color: `${type.color}`,
                    fontWeight: "700",
                    fontSize: "18px",
                    marginBottom: "5px",
                  }}
                >
                  {type.type}
                </h6>
                </div>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#6c757d",
                    margin: "0",
                  }}
                >
                  {type.name}
                </p>
              </div>
            </Col>
          ))}
        </Row>

        </div>
      )
    }    

export default Mission