document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Телефон' },
        { id: 2, name: 'Планшет' },
        { id: 3, name: 'Ноутбук' },
        { id: 4, name: 'Навушники' },
    ];

    const searchInput = document.getElementById('search');
    const searchResults = document.querySelector('.search-results');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(query)
        );

        searchResults.innerHTML = filteredProducts.map(product => 
            `<div>${product.name}</div>`
        ).join('');
    });
});
