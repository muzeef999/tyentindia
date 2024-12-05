"use client";

import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/all";
import gsap from "gsap";
import Vision from "@/app/compoents/(story)/Vision";
import Mission from "@/app/compoents/(story)/Mission";
import Management from "@/app/compoents/(story)/Management";
import Form from "@/app/compoents/Form/Form";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const Page = () => {
  useEffect(() => {
    const path = document.querySelector("#path");
    const pathLength = path.getTotalLength();

    gsap.utils.toArray(".circle-group").forEach((group) => {
      const circle = group.querySelector("circle");
      const text = group.querySelector("text");
      const cx = parseFloat(circle.getAttribute("cx"));
      const cy = parseFloat(circle.getAttribute("cy"));

      // Find the start and end points on the path closest to the circle's position
      const startLength = pathLength * (cx / 1910); // Assuming viewBox width is 1910

      gsap.to(group, {
        scrollTrigger: {
          trigger: "#svg_id",
          start: "top center",
          end: "center center",
          scrub: 1,
          toggleActions: "play none none none",
        },
        motionPath: {
          path: path, // Path to follow
          align: path, // Align the group to the path
          alignOrigin: [0.5, 0.5], // Center alignment
          start: 0, // Start at the beginning of the path
          end: startLength / pathLength, // End point based on the circle's position
         
        },
        duration: 3,
      });
    });
  }, []);

  return (
    <div>
      <br />
      <br />
      <Vision />
      <br />
      <br />
      <Mission />
      <br />

      <div>
        <svg
          id="svg_id"
          viewBox="0 0 1910 754"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: "100%",
            height: "auto",
          }}
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            id="path"
            d="M5 529.156C44.5069 466.414 212.492 199.232 303 210.336C447.905 228.114 444.885 337.718 471.829 405.73C494.615 452.472 526.151 554.729 603.086 589.814C680.02 624.899 787.5 483.336 804.779 401.024C823.059 341.733 875.5 212.655 962.546 216.94C1049.59 221.225 1111.22 337.592 1134.09 401.024C1150.38 451.155 1202 584.155 1282.76 589.814C1368.1 595.793 1438.19 476.753 1466 401.024C1489.65 343.114 1545.98 238.437 1620 230.155C1679.46 223.503 1745.77 297.985 1784.25 361.955C1801.07 389.912 1814.4 420.73 1828.48 450.157C1856.08 507.805 1901.21 600.772 1908 598.156"
            stroke="#008AC7"
            strokeWidth="4"
            fill="none"
            strokeDasharray="9,9"
          />

          {/* Circle group with text inside it */}
          <g className="circle-group">
            <circle cx="1650" cy="250" r="100" fill="#008AC7" />
            <text
                  className="circle-text-1"
                  x="1650"
                  y="250"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="24"
                >
                  <tspan x="1650" dy="-1.2em" fontSize="40" fontWeight="500">15+</tspan>
                  <tspan x="1650" dy="1.4em" fontSize="20" fontWeight="600">Plates warranty</tspan>
                 
                </text>

          </g>

          <g className="circle-group">
            <circle cx="1295" cy="550" r="100" fill="#008AC7" />
            <text
                  className="circle-text-1"
                  x="1295"
                  y="550"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="24"
                >
                  <tspan x="1295" dy="-1.2em" fontSize="40" fontWeight="500">9</tspan>
                  <tspan x="1295" dy="1.4em" fontSize="20" fontWeight="600">Indian R&D</tspan>
                 
                </text>

          </g>

          <g className="circle-group">
            <circle cx="989" cy="210" r="100" fill="#008AC7" />
            <text
                  className="circle-text-1"
                  x="989"
                  y="210"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="24"
                >
                  <tspan x="989" dy="-1.2em" fontSize="40" fontWeight="500">125+</tspan>
                  <tspan x="989" dy="1.4em" fontSize="20" fontWeight="600">Strong team</tspan>
                  
                </text>
          </g>

          <g className="circle-group">
            <circle cx="600" cy="550" r="100" fill="#008AC7" />
            <text
                  className="circle-text-1"
                  x="600"
                  y="550"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="24"
                >
                  <tspan x="600" dy="-1.2em" fontSize="40" fontWeight="500">9M+</tspan>
                  <tspan x="600" dy="1.4em" fontSize="20" fontWeight="600">Most trusted</tspan>
                 
                </text>
          </g>

          <g className="circle-group">
            <circle cx="280" cy="210" r="100" fill="#008AC7" />
            <text
                  className="circle-text-1"
                  x="280"
                  y="210"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="24"
                >
                  <tspan x="280" dy="-1.2em" fontSize="40" fontWeight="500">73+</tspan>
                  <tspan x="280" dy="1.4em" fontSize="20" fontWeight="600">Indian Branches</tspan>
                  
                </text>
          </g>
        </svg>
      </div>
      <br />
      <br />
      <Management />
      <br />
      <br />
      <Form />
    </div>
  );
};

export default Page;
