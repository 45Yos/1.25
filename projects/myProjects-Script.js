let count = 0;

const main = document.getElementById('main');

const projectsContainer = document.createElement("div");
projectsContainer.id = "projects-container";
projectsContainer.className = "projects-container";

main.appendChild(projectsContainer);

const createProjectCard = (source) => {
    count++;
    const imagePath = `./${source}/images/${source}.png`;

    const projectCard = document.createElement("div");
    projectCard.className = "project-card";

    const projectImage = document.createElement("img");
    projectImage.className = "project-image";
    projectImage.src = imagePath;

    const projectTitle = document.createElement("h2");
    projectTitle.className = "project-title";
    projectTitle.innerText = `Project No. ${count}`;

    const link = document.createElement("a");
    link.href = `./${source}/direct-${source}.html`;
    link.style.textDecoration = "none";
    link.appendChild(projectCard);

    projectCard.appendChild(projectImage);
    projectCard.appendChild(projectTitle);

    projectsContainer.appendChild(link);
};

createProjectCard('advice');
createProjectCard('coffee');
createProjectCard('discover');
createProjectCard('forward');
createProjectCard('here-now');
createProjectCard('let-us');
createProjectCard('VideoEditor');



