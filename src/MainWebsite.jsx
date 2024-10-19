import React from "react";
import Left from "./Left/left";
import Right from "./Right/right";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const MainWebsite = () => {
  const location = useLocation();

  const handleDownload = () => {
    const container = document.getElementById("container");

    html2canvas(container).then((canvas) => {
      const imgData = canvas.toDataURL("image/png"); // Use PNG format for better quality

      // Create a new jsPDF instance
      const pdf = new jsPDF("p", "mm", "a4");

      // Calculate dimensions to maintain aspect ratio
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      // If content height is more than page height, loop over to create multiple pages
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight; // Move to the next page
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Save the PDF
      pdf.save("website-screenshot.pdf");
    });
  };

  return (
    <div>
      <button onClick={handleDownload} style={{ marginBottom: "20px" }}>
        Download as PDF
      </button>
      <div className="container" id="container">
        <Left data={location.state.data} />
        <Right data={location.state.data} />
      </div>
    </div>
  );
};

export default MainWebsite;
