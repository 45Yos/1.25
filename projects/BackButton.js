const backToHomeDiv = document.createElement("div");
backToHomeDiv.id = 'backToHome';
backToHomeDiv.className = "back-to-home";

const backToHomeLink = document.createElement("a");
backToHomeLink.href = "../../index.html";
backToHomeLink.innerText = "Back to Home";

const backToProjectsDiv = document.createElement("div");
backToProjectsDiv.className = "back-to-home";
backToProjectsDiv.id = 'backToProjects';


const backToProjectsLink = document.createElement("a");
backToProjectsLink.href = "../myprojects.html";
backToProjectsLink.innerText = "Back to Projects";


backToHomeDiv.appendChild(backToHomeLink);

backToProjectsDiv.appendChild(backToProjectsLink);

document.body.appendChild(backToHomeDiv);
document.body.appendChild(backToProjectsDiv);