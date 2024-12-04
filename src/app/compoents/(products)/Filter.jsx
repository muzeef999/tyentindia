import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaDroplet } from "react-icons/fa6";


const Filter = () => {
  return (
    <div>
<h2 className='text-center' style={{color:'#008AC7', fontWeight:'600'}}>Unmatched Purity with Tyent's .01 Micron Filters</h2>
<br/>
       <Row className="mb-5">
        <Col md={6}>
          <img
            src="/path/to/filter-image.jpg" // Replace with the actual path to your image
            alt="Filters"
            className="img-fluid"
          />
        </Col>
        <Col md={6}>

          <div className='d-flex'>
          <FaDroplet size={20}  color='008AC7' style={{margin:'5px'}}/>
          <p style={{fontSize:'18px'}}>Tyent filters are NSF, EPA & ANSI Certified.</p>
          </div>
          <div className='d-flex'>
          <FaDroplet size={20} color='008AC7' style={{margin:'5px'}}/>
          <p style={{fontSize:'18px'}}>
          Tyent Extreme .01 micron filters remove even the toughest
contaminants such as arsenic, chromium VI.etc
          </p>
          </div>
          <div className='d-flex'>
          <FaDroplet size={20} color='008AC7' style={{margin:'5px'}}/>
          <p style={{fontSize:'18px'}}>Tyent filters can remove heavy metals, pharmaceuticals, heavy
          contamination, Micro-organisms, Bacteria,Viruses,algae, fungi.</p>
        
          </div>
          
        </Col>
      </Row>
    </div>
  )
}

export default Filter
