document.addEventListener("DOMContentLoaded", function() {
    const sortButton = document.getElementById('sort-button');
    sortButton.addEventListener('click', sortCountriesByPopulation);
    fetchCountriesData();
});

function fetchCountriesData() {
    fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries')
        .then(response => response.json())
        .then(data => {
            displayCountries(data);
        })
        .catch(error => {
            console.error('Error fetching countries data:', error);
        });
}

function displayCountries(countries) {
    const countryContainer = document.getElementById('country-container');
    countryContainer.innerHTML = ''; // Clear previous content
    countries.forEach(country => {
        const countryCard = createCountryCard(country);
        countryContainer.appendChild(countryCard);
    });
}

function createCountryCard(country) {
    const countryCard = document.createElement('div');
    countryCard.classList.add('country-card');
    countryCard.innerHTML = `
        <h2>${country.name}</h2>
        <p>Population: ${country.population}</p>
        <p>Capital: ${country.capital}</p>
        <p>Region: ${country.region}</p>
        <!-- Add more details here as needed -->
    `;
    return countryCard;
}

function sortCountriesByPopulation() {
    fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=desc')
        .then(response => response.json())
        .then(data => {
            displayCountries(data);
        })
        .catch(error => {
            console.error('Error sorting countries by population:', error);
        });
}
