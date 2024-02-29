const citiesContainer = document.getElementById('cities-container');

fetch('https://api.npoint.io/7bbd3a59c401f616bb89')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data received:', data); 
        
        const cities = data.places; 

        cities.forEach(city => {
            const cityCard = document.createElement('div');
            cityCard.classList.add('city-card');

            const cityName = document.createElement('h2');
            cityName.textContent = city.name;

            const cityImage = document.createElement('img');
            cityImage.src = city.image;
            cityImage.alt = city.name;

            const cityDescription = document.createElement('p');
            cityDescription.textContent = city.info;

            cityCard.appendChild(cityName);
            cityCard.appendChild(cityImage);
            cityCard.appendChild(cityDescription);

            citiesContainer.appendChild(cityCard);
        });
    })
    .catch(error => {
        console.error('There was a problem fetching the data:', error);
    });
