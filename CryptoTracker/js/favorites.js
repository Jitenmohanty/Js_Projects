const API_URL = 'https://api.coingecko.com/api/v3/coins/markets';
const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

document.addEventListener('DOMContentLoaded', () => {
    fetchFavoriteCoins();
});

function fetchFavoriteCoins() {
    if (favorites.length === 0) {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('favorites-list').innerHTML = '<li class="list-group-item">No favorite coins added yet.</li>';
        return;
    }
    document.getElementById('loading').style.display = 'block';
    fetch(`${API_URL}?vs_currency=usd&ids=${favorites.join(',')}&sparkline=false`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('loading').style.display = 'none';
            displayFavoriteCoins(data);
        });
}

function displayFavoriteCoins(coins) {
    const favoritesList = document.getElementById('favorites-list');
    favoritesList.innerHTML = '';
    coins.forEach(coin => {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        li.innerHTML = `
            <div>
                <img src="${coin.image}" alt="${coin.name}" class="coin-image">
                ${coin.name} (${coin.symbol.toUpperCase()}): $${coin.current_price}
            </div>
            <button class="btn btn-outline-danger" onclick="removeFromFavorites('${coin.id}')">Remove</button>
        `;
        favoritesList.appendChild(li);
    });
}

function removeFromFavorites(coinId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(id => id !== coinId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    fetchFavoriteCoins();
}
