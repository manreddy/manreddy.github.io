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


function applyStyleToSections() {
  const sections = document.querySelectorAll('.card');
  const sections_card_body = document.querySelectorAll('.card-body');
  const sections_row = document.querySelectorAll('.row');
  const sections_col = document.querySelectorAll('.col');

  // sections_col.forEach(function(section) {
  //   // Apply custom styles to the sections
  //   section.style.backgroundColor = 'lightblue';
  //   section.style.border = '1px solid black';
  //   section.style.display = 'inline-block';
  //   section.style.margin = '0';
  //   section.style.padding = '0';
  //   // Add more custom styles as needed
  // });


  // sections_row.forEach(function(section) {
  //   // Apply custom styles to the sections
  //   section.style.backgroundColor = 'lightblue';
  //   section.style.border = '1px solid black';
  //   section.style.display = 'inline-block';
  //   section.style.margin = '0';
  //   section.style.padding = '0';
  //   // Add more custom styles as needed
  // });
  
  // sections_card_body.forEach(function(section) {
  //   // Apply custom styles to the sections
  //   section.style.backgroundColor = 'lightblue';
  //   section.style.border = '1px solid black';
  //   // section.style.display = 'inline-block';
  //   // section.style.marginBottom = "0"
  //   // section.style.margin = '0';
  //   // section.style.padding = '0';
  //   // Add more custom styles as needed
  // });

  sections.forEach(function(section) {
    // Apply custom styles to the sections
    // section.style.backgroundColor = 'lightblue';
    // section.style.border = '1px solid black';
    // section.style.marginBottom = "0"
    // section.style.display = 'inline-block';
    // section.style.margin = '0';
    // section.style.padding = '0';
    // Add more custom styles as needed
  });
}
// -------------------------------------------------------------------------
function generatePDF() {
// -------------------------------------------------------------------------
  // get resume section by id
  applyStyleToSections();
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

    const newElement = `<!DOCTYPE html>
    <html>
    <head>
      <title>PDF Template</title>
      <link rel="stylesheet" href="css/styles.css">
    </head>
    <body>  

    <div class="text-center mb-5" style="background-image: linear-gradient(315deg, #1e30f3, #e21e80); 
    text-stroke: 2px #000;
    opacity: 0.8;">
    <h1 class="display-5 fw-bolder mb-0">
    <span style="       
    

    text-stroke: 2px #000;
    background-clip: text; /* Apply gradient to text content */
    -webkit-background-clip: text; /* Apply gradient to text content for WebKit browsers */
    -webkit-text-fill-color: transparent; /* Make text transparent for WebKit browsers */ 
    text-fill-color: transparent;
    
    ">
    Resume
    </span></h1>
    </div> 

    <div>
    ` 
    + htmlContent +
    `
    </div>
    </body>
    </html>`
    console.log(newElement)

    // Generate PDF from the modified clonedResumeSection
    html2pdf()
    .set({
      filename: "IbrahimResume.pdf",
      pagebreak: { mode: ['css'] },
      // image: { type: 'jpeg', quality: 0.98 },
      margin: [5,8,0,8]
    })
    .from(newElement)
    .save();
  }
}
