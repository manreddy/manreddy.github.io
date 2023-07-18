/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// import { jsPDF } from './jsPDF/jspdf';

// code to change html to pdf
  document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById("generateButton");
    
    downloadButton.addEventListener("click", generatePDF);

  });
  
  function generatePDF() {

    window.jsPDF = window.jspdf.jsPDF
    const pdfContentEl = document.getElementById('resume');
    
    const doc = new jsPDF();
    
    doc.html(pdfContentEl.innerHTML).save('test.pdf');

    // get resume section by id
    const resumeElement = document.getElementById("resume");
    // resumeElement.style.margin = "0";
    // resumeElement.style.padding = "0";
    // resumeElement.style = "";

    // get the generate button element, we need it to remove the download button
    const generateButtonElement = resumeElement.querySelector("#generateButton");

    if (resumeElement && generateButtonElement) {

      // Clone the resumeSection element
      const clonedResumeSection = resumeElement.cloneNode(true);

      // Remove the generateButtonElement (download button) from the cloned resumeSection
      let clonedGenerateButtonElement = clonedResumeSection.querySelector("#generateButton");
      // clonedGenerateButtonElement.style = "";

      if (clonedGenerateButtonElement) {
        clonedGenerateButtonElement.remove();
      }

      const htmlContent = clonedResumeSection ? clonedResumeSection.innerHTML : "";
      // console.log(htmlContent)

      // Generate PDF from the modified clonedResumeSection
      html2pdf()
      .set({
        filename: "IbrahimResume.pdf",
        pagebreak: { mode: ['css'] },
        // html2canvas: { scale: 1 },
        // html2canvas: { allowTaint: true,scale: 2, logging:true },
        // jsPDF: { unit: "mm", format: "a4", orientation: "portrait",zoom:2},
        margin: [30,0,0,0]
      })
      .from(htmlContent)
      .save();
    }
  }
  