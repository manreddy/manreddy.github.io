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
    // console.log(clonedResumeSection);

    const htmlContent = clonedResumeSection ? clonedResumeSection.innerHTML : "";
    // console.log(htmlContent);
    const newElement = `
    <!DOCTYPE html>
      <html>
        <head>
          <title>PDF Template</title>
          <link rel="stylesheet" href="css/styles.css">
        </head>
        <body>  
          <div class="text-center">
            <h2 class="display-5 fw-bolder mb-0">
              <span class="text-primary" >Resume</span>
            </h2>
          </div> 
          <div>
            <div class="d-flex align-items-center justify-content-between mb-2">
              <h2 class="text-secondary fw-bolder mb-0">Personal</h2>
            </div>
            <div class="card shadow border-0 rounded-4 mb-auto">
              <div class="card-body p-4">
                <div class="row align-items-center gx-4">
                  <div class="col text-center text-lg-start mb-4 mb-lg-0">
                    <div class="bg-light p-3 rounded-4">
                      <div class="text-secondary fw-bolder">`+ name +`</div>
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
              ` + htmlContent + ` 
            </div>
          </div>
        </body>
      </html>`

      const parser = new DOMParser();
      const doc = parser.parseFromString(newElement, "text/html");


      const allDiv = doc.querySelectorAll("div")
      const cardElement = doc.querySelectorAll(".card")
      const h2Elements = doc.querySelectorAll("h2");
      
      allDiv.forEach((div) => {
        div.style.setProperty("padding-top","0px","important");
        div.style.setProperty("margin-top","0px","important");
        div.style.setProperty("margin-bottom","1px","important");
        div.style.setProperty("padding-bottom","0px","important");
      });

      h2Elements.forEach((h2Element) => {
        h2Element.style.setProperty("font-size","15px","important");
      });

      cardElement.forEach((div) => {
        // div.style.setProperty("border", "2px", "important");
        // div.style.setProperty("border", "2px solid rgba(var(--bs-border-color))", "important");
        // div.style.setProperty("class","shadow","important");
        // div.style.setProperty("background-color","rgba(var(--bs-light-rgb))","important");
        div.style.setProperty("font-size","10px","important");
        // div.style.setProperty("padding","0px","important");
        // console.log(div);
      });

    html2pdf()
    .set({
      filename: "IbrahimResume.pdf",
      pagebreak: { mode: ['css'] },
      margin: [5,9,0,8]
    })
    // .from(newElement.replace(/border-0/g, 'border-primary'))
    .from(doc.documentElement.outerHTML)
    // .from(newElement)
    .save();
  }
}
