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

    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add("text-gradient d-inline");
    }
  
    html2pdf()
      .set({
        filename: "IbrahimResume.pdf",
        margin: 10,
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
      })
      .from(element)
      .save();
  }
  