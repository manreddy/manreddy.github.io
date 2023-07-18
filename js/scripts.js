/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// code to change html to pdf
  document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById("generateButton");
    downloadButton.addEventListener("click", generatePDF);
  });
  
  function generatePDF() {
    const element = document.getElementById("resume");
  
    html2pdf()
      .set({
        filename: "IbrahimResume.pdf",
        margin: 10,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { allowTaint: true,scale: 2, logging:true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait",zoom: 1}
      })
      .from(element)
      .save();
  }
  