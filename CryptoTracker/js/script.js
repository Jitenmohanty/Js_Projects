const CORS_PROXY = 'https://api.allorigins.win/get?url=';
const API_URL = 'https://api.coingecko.com/api/v3/coins/markets';
const PER_PAGE = 100;
let currentPage = 1;
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
    fetchCoins();

    document.getElementById('search').addEventListener('input', debounce(event => {
        searchQuery = event.target.value;
        currentPage = 1;
        fetchCoins();
    }, 500));
});

async function fetchCoins() {
    try {
        document.getElementById('loading').style.display = 'block';
        const response = await fetch(`${CORS_PROXY}${encodeURIComponent(`${API_URL}?vs_currency=usd&order=market_cap_desc&per_page=${PER_PAGE}&page=${currentPage}&sparkline=false`)}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const parsedData = JSON.parse(data.contents);
        document.getElementById('loading').style.display = 'none';
        displayCoins(parsedData);
    } catch (error) {
        console.error('Error fetching coins:', error);
        document.getElementById('loading').style.display = 'none';
        alert('Failed to fetch coins. Please try again later.');
    }
}

function displayCoins(coins) {
    const cryptoList = document.getElementById('crypto-list');
    cryptoList.innerHTML = '';
    coins.filter(coin => coin.name.toLowerCase().includes(searchQuery.toLowerCase()))
         .forEach(coin => {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        li.innerHTML = `
            <div>
                <img src="${coin.image}" alt="${coin.name}" class="coin-image">
                ${coin.name} (${coin.symbol.toUpperCase()}): $${coin.current_price}
            </div>
            <div>
                <button class="btn btn-outline-primary" onclick="addToFavorites('${coin.id}')">Add to Favorites</button>
                <button class="btn btn-outline-secondary" onclick="goToCoinDetails('${coin.id}')">View Details</button>
            </div>
        `;
        cryptoList.appendChild(li);
    });
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function addToFavorites(coinId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(coinId)) {
        favorites.push(coinId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Coin added to favorites!');
    } else {
        alert('Coin is already in favorites!');
    }
}

function goToCoinDetails(coinId) {
    window.location.href = `coins.html?id=${coinId}`;
}
