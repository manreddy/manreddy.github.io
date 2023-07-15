/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// script to create and download pdf
document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.getElementById("generateButton");
    generateButton.addEventListener("click", generatePDF);
  });
  
  function generatePDF(event) {
    event.preventDefault(); // Prevents the default behavior of the link

    const doc = new jsPDF();
    const element = document.getElementById('resume');
  
    doc.html(element, {
      callback: function (pdf) {
        const blob = pdf.output("blob");
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "generated_pdf.pdf";
        link.click();
      }
    });
  }
  
  
  