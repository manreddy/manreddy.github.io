// create variables
const name = "Ibrahim Manreddy";
const phoneNumber = "+230 58247847";
const address = "Old Grand Port Road, Quartier Militaire, Mauritius";
const email = "ibra.manreddy@gmail.com";
const linkedin = "https://www.linkedin.com/in/ibrahim-siddick-ahmad-manreddy-6a682565";
const github = "https://github.com/manreddy";

// Get the reference to the HTML element
const nameContainer = document.getElementById("name");
const phoneContainer = document.getElementById("phone");
const addressContainer = document.getElementById("myAddress");
const emailContainer = document.getElementById("email");
const linkedinContainer = document.getElementById("linkedin");
const githubContainer = document.getElementById("github");

// Update the content with the value of the name variable
if (nameContainer && phoneContainer && addressContainer && emailContainer && linkedinContainer && githubContainer){

  nameContainer.textContent = name;

  addressContainer.textContent = address;

  linkedinContainer.textContent = "Linkedin"
  linkedinContainer.href = linkedin;
  linkedinContainer.target = "_blank";

  githubContainer.textContent = "Github"
  githubContainer.href = github;
  githubContainer.target = "_blank"

  emailContainer.textContent = email;
  emailContainer.href = "mailto:" + email

  phoneContainer.textContent = phoneNumber;
}

// code to change html to pdf
document.addEventListener("DOMContentLoaded", function() {
  const downloadButton = document.getElementById("generateButton");
  downloadButton.addEventListener("click", generatePDF);
});

function generatePDF() {
  // get resume section by id
  const resumeElement = document.getElementById("resume");

  // get the generate button element, we need it to remove the download button
  const generateButtonElement = resumeElement.querySelector("#generateButton");

  if (resumeElement && generateButtonElement) {
    // Clone the resumeSection element
    const clonedResumeSection = resumeElement.cloneNode(true);

    // Remove the generateButtonElement (download button) from the cloned resumeSection
    let clonedGenerateButtonElement = clonedResumeSection.querySelector("#generateButton");

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
    <div class="d-flex align-items-center justify-content-between mb-2">
      <h2 class="text-primary fw-bolder mb-0">Personal</h2>
    </div>
      <div class="card shadow border-0 rounded-4 mb-auto">
          <div class="card-body p-3">
              <div class="row align-items-center gx-4">
                  <div class="col text-center text-lg-start mb-2 mb-lg-0">
                      <div class="bg-light p-2 rounded-4">
                          <div class="text-primary fw-bolder"><h5>`+ name +`</h5></div>
                          <div class="small fw-bolder">DevOps Engineer</div>
                          <div class="small">`+ address +`</div>
                      </div>
                  </div>
                  <div class="col-lg-8">
                      <div class="mb-1">`+ email +`</div>
                      <div class="mb-1">`+ phoneNumber +`</div>
                      <div class="mb-1">`+ github +`</div>
                      <div class="mb-1">`+ linkedin +`</div>
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
    // Generate PDF from the modified clonedResumeSection
    html2pdf()
    .set({
      filename: "IbrahimResume.pdf",
      pagebreak: { mode: ['css'] },
      margin: [5,8,0,8]
    })
    .from(newElement)
    .save();
  }
}
