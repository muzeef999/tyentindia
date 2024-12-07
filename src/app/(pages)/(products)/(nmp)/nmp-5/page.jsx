import React from "react";
import "../../../../style/Nmp.css";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import Display from "@/app/compoents/(products)/Display";
import Touchpreview from "@/app/compoents/(products)/Touchpreview";
import Features from "@/app/compoents/(products)/Features";
import Filter from "@/app/compoents/(products)/Filter";
import OneTouchDispaly from "@/app/compoents/(products)/OneTouchDispaly";
import npmhealth from "@/asserts/npmhealth.png";
import Image from "next/image";
import plates from "@/asserts/nmp/NMP5ECOMODE.webp";
import AnimatedSVG from "@/app/compoents/(products)/AnimatedSVG";
import Certifications from "@/app/compoents/Certifications";
import ProductSection from "@/app/compoents/(products)/ProductSection";
 
const TyentNMP5 = () => {
  const handleTab = (index) => {
    setCurrentIndex(index);
  };

  const products = [
    {
      src: [
        "https://firebasestorage.googleapis.com/v0/b/tyent-fa17c.appspot.com/o/nmp%2FPRODUCTNMP1.webp?alt=media&token=522f47f3-2aef-47ef-9ddb-c426ac468fa5",
        "https://firebasestorage.googleapis.com/v0/b/tyent-fa17c.appspot.com/o/nmp%2FPRODUCTIMAGESNMP3.webp?alt=media&token=a492cd28-e40d-4a0a-a569-2cc647a89eb8",
        "https://firebasestorage.googleapis.com/v0/b/tyent-fa17c.appspot.com/o/nmp%2FPRODUCTIMAGESNMP2.webp?alt=media&token=b032deee-d922-4b11-946e-81b555e14e56",
      ],
    },
  ];

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

  const features = [
    {
      title: "11 Japanese Plates",
      description:
        "The Tyent NMP-7 features seven platinum-coated, 99.99% pure solid hybrid mesh electrode/plates crafted with advanced Japanese technology, ensuring stable oxygen levels, -ORP up to -950*, and superior micro-clustering. Includes 15-year warranty, 45+ years lifespan.",
      icon: plates, // Replace with the actual path to your icon
    },
    {
      title: "Advanced Power Supply",
      description:
        "Tyent's patented SMPS Plus power system, with 55+ adjustable settings, ensures consistent performance. Exclusively designed for ionizers, it allows Tyent to produce strong alkaline (11.5-2.5 pH) and acidic water without chemicals, enhancing both efficiency and lifespan.",
      icon: plates, // Replace with the actual path to your icon
    },
    {
      title: "Produces 7 Water Levels",
      description:
        "The Tyent NMP-7 water ionizer produces a continuous stream of 7 different water levels,ranging from strong alkaline water (11.5 pH) to strong acidic water (2.5 pH). This versatile ionizer meets all your family’s needs, providing pH levels for drinking, cleaning, and more.",
      icon: plates, // Replace with the actual path to your icon
    },
    {
      title: "Largest One-Touch Display",
      description:
        "The Tyent NMP-7 ionizer offers the industry's largest full-color LCD display with clear voice prompts. With a single touch, choose from 7 ionized water types, ensuring effortless and efficient hydration.",
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
      description:
        "The Tyent water ionizer’s features a user-friendly LCD display that tracks real-time filter usage, alerting you when replacements are needed. This convenient monitoring system helps maintain optimal performance and ensures clean, healthy water at all times.",
      icon: plates, // Replace with the actual path to your icon
    },
  ];



  return (
    <div>
      <Container>

      {/*product Add to Cart*/}
      <ProductSection
        products={products}
        specifications={specifications}
      />

        {/* Description Section */}
        <Row className="mb-5">
          <Col>
            <p
              className="text-center"
              style={{ color: "#008AC7", fontWeight: 400, fontSize: "18px" }}
            >
              The Tyent NMP-11 is engineered with cutting-edge technology,
              modern design, and a user-friendly interface, making it the
              ultimate water ionizer. It features 11 advanced Japanese solid
              hybrid mesh plates/electrodes from Permelac, Japan (Since 1969),
              crafted from titanium and coated with platinum to ensure 99.9%
              purity. With an expanded surface area, it maintains stable oxygen
              levels and enhances micro-clustering. Offering seven different
              water levels, it generates selective antioxidant molecular
              hydrogen up to 1800 PPB and an ORP of up to -1150. It includes a
              3-year warranty on the machine, a 15-year warranty on the
              electrodes/plates, and a lifespan exceeding 45 years. Ideal for
              small households, it provides clean, healthy ionized water
              effortlessly.
            </p>
          </Col>
        </Row>

        {/* Features Section */}
          <div className="row g-3">
            {features.map((data, index) => (
              <div className="col-md-6" key={data.id}>
                <Features data={data} delay={index * 100} />
              </div>
            ))}
          </div>
      
        <br />
        <br />

        <div className="custom-card">
          <Row>
            <Col
              md={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ width: "80%" }}
              >
                <Image
                  src={npmhealth}
                  alt="nmphealth"
                  layout="responsive"
                  style={{
                    borderTopLeftRadius: "50%",
                    borderBottomLeftRadius: "50%",
                    borderBottomRightRadius: "50%",
                  }}
                />
              </div>
            </Col>
            <Col md={6}>
              <h1
                style={{
                  fontSize: "38px",
                  fontWeight: "700",
                  lineHeight: "56px",
                  marginBottom: "16px",
                  color: "#333", // Better visibility
                }}
              >
                The Daily Boost Your Body Deserves
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "42px",
                  marginBottom: "24px",
                  color: "#555", // Slightly lighter than heading
                }}
              >
                Daily consumption of TYENT ionised alkaline water boosts
                resistance, slows the ageing process, improves nutrient
                absorption, effectively removes toxins and free radicals, and
                aids in the prevention and treatment of dangerous chronic
                diseases such as cancer, diabetes, Hashimoto’s, gout,
                hypertension, stomach pain, colitis, digestive disorders, and
                many more…
              </p>
            </Col>
          </Row>
        </div>

        {/* east to use display */}
        <br />
        <Display />

        <br />
        <Touchpreview />

        <br />
        {/* One-Touch Display */}
        <OneTouchDispaly />
      </Container>

      <div>
        <AnimatedSVG />
      </div>

      <Container>
        <Filter />

        <h2
          className="text-center mb-4"
          style={{
            color: "#008AC7",
            fontWeight: "600",
            fontSize: "2rem", // Default for large screens
          }}
        >
          Tyent NMP-5 Specification's
        </h2>

        <Table className="custom-table" hover responsive>
          <tbody>
            {specifications.map((item, idx) => (
              <tr key={idx}>
                <td
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#008AC7",
                    textAlign: "left",
                    padding: "10px",
                  }}
                >
                  {item.label}
                </td>
                <td
                  style={{
                    fontSize: "16px",
                    color: "#333",
                    textAlign: "left",
                    padding: "10px",
                  }}
                >
                  : {item.name}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Certifications />
      </Container>
    </div>
  );
};

export default TyentNMP5;
