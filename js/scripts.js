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
    downloadButton.addEventListener("click", generatePDF);
  });
  
  function generatePDF() {
    const element = document.getElementById("resume");
    const content = [];
  
    // Traverse the DOM section and add its content to the PDF
    traverseDOMSection(element, content);
  
    const docDefinition = {
      content: content
    };
  
    pdfMake.createPdf(docDefinition).download("generated_pdf.pdf");
  }
  
  function traverseDOMSection(element, content) {
    const children = element.childNodes;
  
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
  
      if (child.nodeType === 1) {
        const tagName = child.tagName.toLowerCase();
  
        // Add supported tags to the PDF content
        if (tagName === "p" || tagName === "h1" || tagName === "h2" || tagName === "h3") {
          content.push({
            text: child.textContent,
            style: tagName
          });
        } else if (tagName === "img") {
          // Handle images separately if needed
          // You can add image to the PDF using 'content.push({ image: imageSource })'
        } else {
          // Recursively traverse child elements
          traverseDOMSection(child, content);
        }
      }
    }
  }