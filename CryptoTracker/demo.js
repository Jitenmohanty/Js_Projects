const API_URL = 'https://api.coingecko.com/api/v3/coins/';
let coinId;

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    coinId = params.get('id');
    if (coinId) {
        fetchCoinDetails();
        loadChart('1'); // Default to 24h
    } else {
        alert('No coin id provided');
    }
});

async function fetchCoinDetails() {
    try {
        document.getElementById('loading').style.display = 'block';
        const response = await fetch(`${API_URL}${coinId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        document.getElementById('loading').style.display = 'none';
        displayCoinDetails(data);
    } catch (error) {
        console.error('Error fetching coin details:', error);
        document.getElementById('loading').style.display = 'none';
        alert('Failed to fetch coin details. Please try again later.');
    }
}

function displayCoinDetails(coin) {
    const details = document.getElementById('coin-details');
    details.innerHTML = `
        <h2>${coin.name} (${coin.symbol.toUpperCase()})</h2>
        <img src="${coin.image.large}" alt="${coin.name}" class="coin-image-large">
        <p>Rank: ${coin.market_cap_rank}</p>
        <p>Price: $${coin.market_data.current_price.usd}</p>
        <p>Market Cap: $${coin.market_data.market_cap.usd}</p>
        <p>${coin.description.en}</p>
    `;
}

async function loadChart(days) {
    try {
        document.getElementById('loading').style.display = 'block';
        const response = await fetch(`${API_URL}${coinId}/market_chart?vs_currency=usd&days=${days}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        document.getElementById('loading').style.display = 'none';
        displayChart(data.prices);
    } catch (error) {
        console.error('Error fetching chart data:', error);
        document.getElementById('loading').style.display = 'none';
        alert('Failed to fetch chart data. Please try again later.');
    }
}

function displayChart(prices) {
    const ctx = document.getElementById('price-chart').getContext('2d');
    const labels = prices.map(price => new Date(price[0]));
    const data = prices.map(price => price[1]);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Price (USD)',
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day'
                    }
                },
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}
