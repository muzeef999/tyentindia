import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import "../style/AppBar.css"

// Reusable Table Component
const ComparisonTable = ({ title, data, isTyent }) => (
  <Table className="rounded"
    bordered
    hover
    style={{
      borderSpacing: "0",
      width: "100%",
      border: "1px solid #ddd",
      borderRadius: "4px",
      marginBottom: "20px",
    }}
  >
    <thead>
      <tr>
        <th
          style={{
            textAlign: "center",
            color: isTyent ? "#008AC7" : "#000", // Title color based on brand
            fontSize: "24px",
            fontWeight:700
          }}
          colSpan="2"
        >
          {title}
        </th>
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr key={index} style={{ border: "1px solid #ddd" }}>
          <td
            style={{
              textAlign: "left",
              padding: "8px",
              fontSize:"18px",
              color: isTyent ? "#008AC7" : "inherit", // Label color for Tyent
              fontWeight: isTyent ? "normal" : "normal",
            }}
          >
            {row.label}
          </td>
          <td style={{ textAlign: "left", padding: "8px" }}>{row.value}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

const PriceComp = () => {
  const tablesData = [
    {
      title: "TYENT NMP-5",
      isTyent: true,
      data: [
        { label: "Price:", value: "160,000/-" },
        { label: "Generates:", value: "7 Water types" },
        { label: "Plates:", value: "5" },
        { label: "ORP:", value: "-850" },
        { label: "Warranty:", value: "3 yr & 15 yr on plates" },
      ],
    },
    {
      title: "ENAGIC KANGEN Jr4",
      isTyent: false,
      data: [
        { label: "Price:", value: "218,000/-" },
        { label: "Generates:", value: "5 Water types" },
        { label: "Plates:", value: "4" },
        { label: "ORP:", value: "-450" },
        { label: "Warranty:", value: "3 years" },
      ],
    },
    {
      title: "TYENT NMP-7",
      isTyent: true,
      data: [
        { label: "Price:", value: "195,000/-" },
        { label: "Generates:", value: "7 Water types" },
        { label: "Plates:", value: "7" },
        { label: "ORP:", value: "-950" },
        { label: "Warranty:", value: "3 yr & 15 yr on plates" },
      ],
    },
    {
      title: "ENAGIC KANGEN SD501",
      isTyent: false,
      data: [
        { label: "Price:", value: "277,000/-" },
        { label: "Generates:", value: "5 Water types" },
        { label: "Plates:", value: "7" },
        { label: "ORP:", value: "-631" },
        { label: "Warranty:", value: "5 years" },
      ],
    },
    {
      title: "TYENT NMP-9",
      isTyent: true,
      data: [
        { label: "Price:", value: "227,000/-" },
        { label: "Generates:", value: "7 Water types" },
        { label: "Plates:", value: "9" },
        { label: "ORP:", value: "-1050" },
        { label: "Warranty:", value: "3 yr & 15 yr on plates" },
      ],
    },
    {
      title: "ENAGIC KANGEN k8",
      isTyent: false,
      data: [
        { label: "Price:", value: "3,45,000/-" },
        { label: "Generates:", value: "5 Water types" },
        { label: "Plates:", value: "8" },
        { label: "ORP:", value: "-722" },
        { label: "Warranty:", value: "3 years" },
      ],
    },
  ];

  return (
    <div className="container">
     

      <h1 className="text-center" style={{ fontSize: '3rem', fontWeight: 'bold', color: '#333' }}>
      Detailed Comparison
</h1>
<p 
  className="text-center" 
  style={{
    marginTop:'-20px',
    fontWeight: 600, 
    fontSize: '70px', 
    color: '#008AC7', 
  }}
>
  Tyent<span style={{ color: '#7B7B7B', fontSize: '44px', fontWeight: 'normal' }}>
    {' '}VS{' '}
  </span> <span style={{color:'#7B7B7B'}}>Kangen</span>
</p>

      <Row>
        {tablesData.map((table, index) => (
          <Col
            xs={12}
            md={6}
            className="d-flex align-items-center justify-content-center text-center mb-4"
            key={index}
          >
            <ComparisonTable
              title={table.title}
              data={table.data}
              isTyent={table.isTyent}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PriceComp;
