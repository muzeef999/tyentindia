import React from 'react';
import Image from 'next/image';
import icon1 from "@/asserts/certifications/1.png";
import icon2 from "@/asserts/certifications/2.png";
import icon3 from "@/asserts/certifications/3.png";
import icon4 from "@/asserts/certifications/4.png";
import icon5 from "@/asserts/certifications/5.png";
import icon6 from "@/asserts/certifications/6.png";
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa6";


const Certifications = () => {
  return (
    <>
      <div className="container text-center">
        <h2 style={{ color: '#008AC7', fontWeight: '600' }}>Certifications</h2>
        <center>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 500,
              wordWrap: 'break-word',
              maxWidth: '70%',
            }}
          >
            Tyent water ionizer has more than 160+ International patents and certified by all International quality certification authorities.
          </p>
        </center>

        <center>
          <div className="row justify-content-center">
            {[icon1, icon2, icon3, icon4, icon5, icon6].map((icon, index) => (
              <div
                key={index}
                className="col-6 col-sm-4 col-md-2 mb-3 d-flex justify-content-center"
              >
                <Image
                  src={icon}
                  alt={`Certification ${index + 1}`}
                  layout="responsive"
                  width={100}
                  height={100}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </center>
     
     <Link style={{textDecoration:'none', color:'#565959'}} className='float-end' href={"/certifications"}>View All &nbsp; <FaArrowRight/></Link>

      </div>
    </>
  );
};

export default Certifications;
