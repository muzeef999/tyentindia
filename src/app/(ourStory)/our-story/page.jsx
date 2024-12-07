"use client"
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/all";
import gsap from "gsap";
import Vision from "@/app/compoents/(story)/Vision";
const Mission = dynamic(() => import('@//app/compoents/(story)/Mission'));
import Management from "@/app/compoents/(story)/Management";
import Form from "@/app/compoents/Form/Form";
import dynamic from "next/dynamic";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const Page = () => {
 

  return (
    <div>
      <br />
      <br />
      <Vision />
      <br />
      <br />
      <Mission />
      <br />
      <br/>
      <Management />
      <br />
      <br />
      <Form />
    </div>
  );
};

export default Page;
