"use client";
import Image from "next/image";
import React, { Suspense } from "react";
import Navbar from "@/components/Layout/Navbar";
import PageBanner from "@/components/Layout/PageBanner";
import FertilityDoctor from "@/components/Common/FertilityDoctor";
const OurExperts = React.lazy(() => import("@/components/Common/OurExperts"));

export default function ClientOurExpertsPage() {
  return (
    <>
      <Navbar />

      <PageBanner
  bgImage="/images/experts-banner.avif"
/>
  {/* ✅ Wrap in Suspense boundary */}
      <Suspense fallback={<div>Loading experts...</div>}>
        <OurExperts />
      </Suspense>

       <FertilityDoctor />
    </>
  );
}
