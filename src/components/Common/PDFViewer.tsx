"use client";

import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// ✅ Configure worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

























const PDFViewer: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <Document
        file="/images/pdf/bnoon-patients-rights.pdf"
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={<p>Loading PDF...</p>}
      >
        {Array.from(new Array(numPages), (_, index) => (
          <div
            key={`page_${index + 1}`}
            style={{
              marginBottom: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Page
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              width={900}
            />
          </div>
        ))}
      </Document>
    </div>
  );
};

export default PDFViewer;
