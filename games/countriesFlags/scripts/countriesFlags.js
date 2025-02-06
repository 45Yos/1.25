import { countries, reset, search } from "./countriesService.js";
import { createCards } from "./domService.js";

console.log(countries);
createCards(countries);

const searchBar = document.getElementById('search');
searchBar.addEventListener('input', () => {
    reset();
    search();
});

