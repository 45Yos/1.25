import { countries } from "./countriesService.js";

const generateCard = (country) => {
    const card = document.createElement('div');
    card.className = "card m-2 col-sm-12 col-md-3"

    const cardImg = document.createElement('img');
    cardImg.src = country.flags.png;
    cardImg.className = "card-img-top img mt-2 border rounded shadow";

    const cardBody = document.createElement('div');
    cardBody.className = "card-body";

    const cardTitle = document.createElement('h5');
    cardTitle.className = "card-title";
    cardTitle.innerText = country.name.common;

    const population = document.createElement('p');
    population.className = "card-text";
    population.innerText = `Population: ${country.population}`;

    const region = document.createElement('p');
    region.className = "card-text";
    region.innerText = `Region: ${country.region}`;

    const cardFooter = document.createElement('div');
    cardFooter.className = "card-footer d-flex justify-content-center mb-2";

    let heartIcon = document.createElement('i');
    heartIcon.className = "fa fa-heart text-dark";


    const checkFavorites = JSON.parse(localStorage.getItem('favoriteCountries'));
    let heartIconClicked;

    if (checkFavorites) {

        if (checkFavorites.some(country => country.name.common === cardTitle.innerText)) {
            heartIcon.classList.remove('text-dark');
            heartIcon.classList.add('text-danger');
            heartIconClicked = true;
        } else {
            heartIcon.classList.remove('text-danger');
            heartIcon.classList.add('text-dark');
            heartIconClicked = false;
        }
    }

    heartIcon.addEventListener('click', () => {

        const clickSFX = new Audio('./sound/ding.wav');
        clickSFX.play();

        if (!heartIconClicked) {
            heartIconClicked = true;
            const favoriteCountries = JSON.parse(localStorage.getItem('favoriteCountries')) || [];
            heartIcon.classList.remove('text-dark');
            heartIcon.classList.add('text-danger');

            favoriteCountries.push(country);
            localStorage.setItem('favoriteCountries', JSON.stringify(favoriteCountries));


        } else {
            heartIcon.classList.remove('text-danger');
            heartIcon.classList.add('text-dark');
            heartIconClicked = false;

            const favoriteCountries = JSON.parse(localStorage.getItem('favoriteCountries')) || [];
            const favoriteCountriesFiltered = favoriteCountries.filter(country => country.name.common !== cardTitle.innerText);

            localStorage.setItem('favoriteCountries', JSON.stringify(favoriteCountriesFiltered));

        }

    })

    cardFooter.appendChild(heartIcon);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(population);
    cardBody.appendChild(region);

    card.appendChild(cardImg);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    const cardsContainer = document.getElementById('cards');
    cardsContainer.appendChild(card);
}

const createCards = () => {
    for (const country of countries) {
        generateCard(country);
    }
}

export { createCards, generateCard };