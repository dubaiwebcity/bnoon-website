"use client";

import HowItWorksStyle2 from "@/components/Common/HowItWorksStyle2";
import OurBlog from "@/components/Common/OurBlog";
import OurDoctorsStyle2 from "@/components/Common/OurDoctorsStyle2";
import AboutUs from "@/components/HomeDemo2/AboutUs";
import HeroBanner from "@/components/HomeDemo2/HeroBanner";
import OurServices from "@/components/HomeDemo2/OurServices";
import Navbar from "@/components/Layout/Navbar";

export default function Home2() {
  return (
    <>
      <Navbar />

      <HeroBanner />

      <AboutUs />

      <OurServices />

      <HowItWorksStyle2 />


      <OurDoctorsStyle2 />

      <OurBlog />
    </>
  );
}
