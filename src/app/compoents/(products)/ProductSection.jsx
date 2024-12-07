"use client"
import React, { useRef, useState } from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap';

const ProductSection = () => {

  const specifications = [
    { label: "Model", name: "Tyent NMP-5" },
    { label: "Electrode/Plates", name: "5" },
    { label: "pH Range", name: "2.5 - 11.5" },
    { label: "ORP Range", name: "Up to -850" },
    { label: "Hydrogen Range", name: "Up to 1550 PPB" },
    { label: "Generates", name: "7 types of water levels" },
    {
      label: "pH Levels",
      name: "3 alkaline, 2 acidic, 1 neutral, & 1 Turbo (Strong alkaline 11.5 pH)",
    },
    { label: "Plate Surface Area", name: "52.9 * 5 = 264.5 sq inches" },
    { label: "Water Generating Capacity", name: "1.5 - 3.0 L/min" },
    {
      label: "Filters Structure",
      name: "2 filters (NSF, EPA & ANSI certified)",
    },
    {
      label: "Filter Composition",
      name: "Carbon Block, UF, TM ceramics, Membrane & Calcium sulfite",
    },
    { label: "Filter Capacity", name: "8500 L" },
    { label: "Dimension (mm)", name: "300(W) * 135(D) * 355(H)" },
    { label: "Weight (kg)", name: "5.2" },
    { label: "Cleaning Type", name: "Auto cleaning system (PAST Technology)" },
    { label: "Display Type", name: "One-touch LCD" },
    { label: "Power Supply", name: "Patented SMPS PLUS power supply" },
    { label: "Power Consumption", name: "Max 220W" },
    { label: "Operating Voltage Range", name: "200 - 240V, 50-60 Hz" },
    { label: "Voice Confirmation", name: "Yes" },
    {
      label: "Input Water Parameters Required",
      name: "Input water TDS: 90 - 160, Input water pH: 7 pH, Input water Pressure: 5 - 7 L/Min",
    },
    {
      label: "Warranty",
      name: "3 Years on ionizer & 15 years on electrodes/plates",
    },
    {
      label: "General Services",
      name: "3 services per year, 9 free services in 3 years in warranty period (PAN INDIA)",
    },
    {
      label: "Safety Function",
      name: "Water temperature sensor, Supplying water sensor, Overheating protection sensor, Error indication sensor",
    },
    { label: "Installation Type", name: "Counter-top/Wall-mounted" },
    {
      label: "Water Dispensing Method",
      name: "Tankless System/Touch Button/Fully Automatic",
    },
    {
      label: "Electrode Design",
      name: "Solid-Hybrid mesh plate design (Titanium & Platinum)",
    },
    { label: "Electrode Material", name: "Platinum-coated Titanium" },
    { label: "Purity of Plates", name: "99.99% (Permelac, Japan)" },
    { label: "Plates Manufacturing", name: "Permelac, Japan" },
    { label: "Additional Use of Chemicals/Salt", name: "No" },
    {
      label: "Manufacturing Company",
      name: "Taeyoung E&T Co., Ltd, 908 Ungsang-daero, Yangsan-si, Gyeongsangnam-do, Korea - 50537",
    },
  ];
    
  const products = [
    {
      src: [
        "https://firebasestorage.googleapis.com/v0/b/tyent-fa17c.appspot.com/o/nmp%2FPRODUCTNMP1.webp?alt=media&token=522f47f3-2aef-47ef-9ddb-c426ac468fa5",
        "https://firebasestorage.googleapis.com/v0/b/tyent-fa17c.appspot.com/o/nmp%2FPRODUCTIMAGESNMP3.webp?alt=media&token=a492cd28-e40d-4a0a-a569-2cc647a89eb8",
        "https://firebasestorage.googleapis.com/v0/b/tyent-fa17c.appspot.com/o/nmp%2FPRODUCTIMAGESNMP2.webp?alt=media&token=b032deee-d922-4b11-946e-81b555e14e56",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // To track the selected image index
  const myRef = useRef(null); // For any potential DOM manipulation

  const handleTab = (index) => {
    setCurrentIndex(index);
  };

  const selectedSpecifications = specifications.filter((item) =>
    [
      "Electrode/Plates",
      "pH Range",
      "ORP Range",
      "Hydrogen Range",
      "Generates",
      "Dimensions",
      "Warranty",
    ].includes(item.label)
  );
  return (
    <div>

        {/* Header Section */}
        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <div
              style={{ width: "100%", margin: "30px", position: "relative" }}
            >
              {products.map((item, itemIndex) => (
                <div
                  className="d-flex justify-content-center align-items-center"
                  key={itemIndex}
                >
                  {/* Thumbnail Images */}
                  <div className="thumb d-flex flex-column mt-3" ref={myRef}>
                    {item.src.map((img, index) => (
                      <img
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        key={index}
                        onClick={() => handleTab(index)}
                        style={{
                          cursor: "pointer",
                          border:
                            currentIndex === index
                              ? "2px solid #008AC7"
                              : "none",
                          margin: "10px",
                          width: "80px", // Thumbnail size
                          height: "80px",
                          objectFit: "cover",
                          borderRadius: "12px",
                        }}
                      />
                    ))}
                  </div>

                  {/* Main Image */}
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={item.src[currentIndex]}
                      alt={`Product ${currentIndex + 1}`}
                      width="100%"
                      style={{ borderRadius: "22px", padding: "25px" }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex gap-3 justify-content-center align-items-center">
              <Button className="appbardemo">Call to Order</Button>
              <Button className="appbardemo">Download Brochure</Button>
            </div>
          </Col>
          <Col md={6}>
            <h1 style={{ fontWeight: 600, color: "#008AC7" }}>Tyent NMP-5</h1>
            <hr />
            <h4>
              M.R.P: <span style={{ fontWeight: 500 }}>₹ 2,05,000/-</span>
            </h4>
            <hr />
            <h4 style={{ fontWeight: 500 }}>Specifications</h4>
            <hr />
            <Table
              className="table-borderless custom-table"
              hover
              style={{ backgroundColor: "#f8fbfe" }}
            >
              <tbody>
                {selectedSpecifications.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.label}</td>
                    <td> :{item.name}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <hr />
            <h6>
              *Depends on input water quality and Flow rate (No use of external
              chemicals, salts, or artificial enhancers)
            </h6>
            <hr />
            <h6>
              *Only Tyent, with its patented turbo technology, can produce water
              with an 11.5 pH and 2.5 pH naturally, without the need for
              chemicals, artificial enhancers, or salts.
            </h6>
            <hr />
          </Col>
        </Row>
    </div>
  )
}

export default ProductSection