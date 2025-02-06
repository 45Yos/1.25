import { createCards, generateCard } from "./domService.js";


const getCountries = async () => {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        return await res.json();
    } catch (error) {
        console.error('Failed to fetch countries', error);
    }
};

const countriesFull = await getCountries();
let countries = [...countriesFull];

const reset = () => {
    countries = [...countriesFull];
}

const search = (i) => {
    const searchBar = document.getElementById('search');
    const cards = document.querySelectorAll('.card');
    if (searchBar.value === '') {
        countries = [...countriesFull];
    } else {

        const searchBarValue = searchBar.value.toLowerCase();

        for (let i = 0; i <= searchBarValue.length; i++) {
            const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchBar.value.toLowerCase()));
            countries = filteredCountries;

            cards.forEach(card => card.remove());
        }
        createCards(countries);
        console.log(countries);
    }
}



export { countries, reset, search };