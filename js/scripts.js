/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// script to create and download pdf
// import { jsPDF } from "jspdf";
// document.addEventListener("DOMContentLoaded", function() {
//     const generateButton = document.getElementById("generateButton");
//     generateButton.addEventListener("click", generatePDF);
//   });
  
//   function generatePDF(event) {
//     event.preventDefault(); // Prevents the default behavior of the link

//     const doc = new jsPDF();
//     const element = document.getElementById('resume');
  
//     doc.html(element, {
//       callback: function (pdf) {
//         const blob = pdf.output("blob");
//         const link = document.createElement("a");
//         link.href = URL.createObjectURL(blob);
//         link.download = "generated_pdf.pdf";
//         link.click();
//       }
//     });
//   }

  document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById("generateButton");
    downloadButton.addEventListener("click", generateAndDownloadPDF);
  });
  
  function generateAndDownloadPDF() {
    // Get the HTML section to convert to PDF
    const section = document.getElementById("resume");
  
    // Create the PDF definition
    const docDefinition = {
      content: [
        {
          layout: "lightHorizontalLines", // Add table borders
          table: {
            widths: ["*"], // Use full width of the page
            body: [
              [
                {
                  text: section.innerHTML, // Use the HTML content of the section
                  alignment: "left",
                  border: [false, false, false, false], // No border around the HTML content
                  fillColor: "#ffffff", // Set background color of the table cell
                },
              ],
            ],
          },
        },
      ],
    };
  
    // Generate and download the PDF
    pdfMake.createPdf(docDefinition).download("generated_pdf.pdf");
  }
  