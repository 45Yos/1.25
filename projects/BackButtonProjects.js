const backToHome = document.createElement("div");
backToHome.id = 'backToHome';
backToHome.className = "back-to-home";
backToHome.style.marginLeft = '-10%';

const backToHomeLink = document.createElement("a");
backToHomeLink.href = "../../index.html";
backToHomeLink.innerText = "Back to Home";





const backToProjects = document.createElement("div");
backToProjects.id = 'backToProjects';
backToProjects.className = "back-to-home";


const backToProjectsLink = document.createElement("a");
backToProjectsLink.href = '../myprojects.html';
backToProjectsLink.innerText = "Return to Projects";







backToProjects.appendChild(backToProjectsLink);
backToHome.appendChild(backToHomeLink);

document.body.appendChild(backToProjects);
document.body.appendChild(backToHome);