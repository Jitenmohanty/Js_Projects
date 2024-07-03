const API_URL = 'https://api.coingecko.com/api/v3/coins/';
let coinId;

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    coinId = params.get('id');
    fetchCoinDetails();
    loadChart('24h');
});

function fetchCoinDetails() {
    document.getElementById('loading').style.display = 'block';
    fetch(`${API_URL}${coinId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('loading').style.display = 'none';
            displayCoinDetails(data);
        });
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

function loadChart(range) {
    document.getElementById('loading').style.display = 'block';
    fetch(`${API_URL}${coinId}/market_chart?vs_currency=usd&days=${range}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('loading').style.display = 'none';
            displayChart(data.prices);
        });
}

function displayChart(prices) {
    const ctx = document.getElementById('price-chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: prices.map(price => new Date(price[0]).toLocaleDateString()),
            datasets: [{
                label: 'Price (USD)',
                data: prices.map(price => price[1]),
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false,
            }]
        },
        options: {
            scales: {
                x: { type: 'time', time: { unit: 'day' } },
                y: { beginAtZero: false }
            }
        }
    });
}
