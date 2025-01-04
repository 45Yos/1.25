const backToHomeDiv = document.createElement("div");
backToHomeDiv.className = "back-to-home";
backToHomeDiv.style.marginLeft = '-10%';

const backToHomeLink = document.createElement("a");
backToHomeLink.href = "../../index.html";
backToHomeLink.innerText = "Back to Home";

const backToProjectsDiv = document.createElement("div");
backToProjectsDiv.className = "back-to-home";
backToProjectsDiv.style.marginLeft = '10%';


const backToProjectsLink = document.createElement("a");
backToProjectsLink.href = "../myProjects.html";
backToProjectsLink.innerText = "Back to Projects";


backToHomeDiv.appendChild(backToHomeLink);

backToProjectsDiv.appendChild(backToProjectsLink);

document.body.appendChild(backToHomeDiv);
document.body.appendChild(backToProjectsDiv);