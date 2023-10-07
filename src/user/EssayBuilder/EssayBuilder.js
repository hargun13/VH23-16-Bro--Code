import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ReactToPdf from "react-to-pdf";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import Button from '@mui/material/Button';


const generatePDF = async (content) => {
  const canvas = await html2canvas(content);
  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF();
  const imgWidth = 210; // Width of the PDF document
  const pageHeight = (imgWidth * canvas.height) / canvas.width;
  pdf.addImage(imgData, "PNG", 0, 0, imgWidth, pageHeight);
  pdf.save("editor_content.pdf");
};

const EssayBuilder = () => {
  const [value, setValue] = useState("");
  const contentRef = useRef();

  const generatePDF = async () => {
    await html2canvas(contentRef.current);
    const content = contentRef.current;
    const canvas = await html2canvas(content);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const imgWidth = 210;
    const pageHeight = (imgWidth * canvas.height) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, pageHeight);
    pdf.save("editor_content.pdf");
  };

  return (
    <div>

      <h1 className="text-4xl font-semibold p-10 bg-blue-200 mb-5">Essay Builder</h1>
      <div className="p-10">
        <ReactQuill theme="snow" value={value} onChange={setValue} />
        <Button onClick={generatePDF} variant="contained" style={{marginTop:"15px"}}>Download as PDF</Button>
        <div ref={contentRef}>
          {/* Content to be converted to PDF */}
          <div dangerouslySetInnerHTML={{ __html: value }} />
        </div>

      </div>
    </div>
  );
};

export default EssayBuilder;
