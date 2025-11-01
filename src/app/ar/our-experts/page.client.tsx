"use client";
import React, { Suspense } from "react";
import Navbar from "@/features/Layout/Navbar";
import PageBanner from "@/features/Layout/PageBanner";
import FertilityDoctor from "@/features/Common/FertilityDoctor";

// ✅ Lazy-load OurExperts
const OurExperts = React.lazy(() => import("@/features/Common/OurExperts"));

export default function ClientOurExpertsPage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="/images/experts-banner-ar.jpg" />
      
      {/* ✅ Wrap in Suspense boundary */}
      <Suspense fallback={<div>Loading experts...</div>}>
        <OurExperts />
      </Suspense>

      <FertilityDoctor />
    </>
  );
}
