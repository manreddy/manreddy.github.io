/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById("generateButton");
    downloadButton.addEventListener("click", generatePDF);
  });
  
  function generatePDF() {
    const section = document.getElementById("resume");
  
    // Create a new jsPDF instance
    const doc = new jsPDF();
  
    // Set the font size for the PDF content
    doc.setFontSize(12);
  
    // Traverse the DOM section and add its content to the PDF
    traverseDOMSection(section, doc);
  
    // Save the PDF file
    doc.save("generated_pdf.pdf");
  }
  
  function traverseDOMSection(element, doc) {
    const children = element.childNodes;
  
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
  
      if (child.nodeType === 1) {
        const tagName = child.tagName.toLowerCase();
  
        // Add supported tags to the PDF content
        if (tagName === "p" || tagName === "h1" || tagName === "h2" || tagName === "h3") {
          doc.text(child.textContent, 10, doc.autoTable.previous.finalY + 10);
        } else if (tagName === "img") {
          // Handle images separately if needed
          // You can add images to the PDF using 'doc.addImage'
        } else {
          // Recursively traverse child elements
          traverseDOMSection(child, doc);
        }
      }
    }
  }
  