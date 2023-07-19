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

// -------------------------------------------------------------------------
function generatePDF() {
// -------------------------------------------------------------------------
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

    const newElement = `<!DOCTYPE html>
    <html>
    <head>
      <title>PDF Template</title>
      <link rel="stylesheet" href="css/styles.css">
    </head>
    <body>  

    <div class="text-center">
      <h1 class="display-5 fw-bolder mb-0">
        <span>
          Resume
        </span>
      </h1>
    </div> 
    <div class="d-flex align-items-center justify-content-between mb-3">
                                <h2 class="text-primary fw-bolder mb-0">Personal</h2>
                            </div>
                            <div class="card shadow border-0 rounded-4 mb-3">
                                <div class="card-body p-4">
                                    <div class="row align-items-center gx-4">
                                        <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div class="bg-light p-3 rounded-4">
                                                <div class="text-primary fw-bolder"><h5>Ibrahim Manreddy</h5></div>
                                                <div class="small fw-bolder">DevOps Engineer</div>
                                                <div class="small">Quartier Militaire, Mauritius</div>
                                            </div>
                                        </div>
                                        <div class="col-lg-8">
                                            <div class="mb-1">ibra.manreddy@gmail.com</div>
                                            <div class="mb-1">+230 58247847</div>
                                            <div class="mb-1">https://github.com/manreddy</div>
                                            <div class="mb-1">https://www.linkedin.com/in/ibrahim-siddick-ahmad-manreddy-6a682565/</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    <div>
    ` 
    + htmlContent +
    `
    </div>
    </body>
    </html>`
    // console.log(newElement)

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
