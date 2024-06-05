document.addEventListener('DOMContentLoaded', function() {
    const categoryItems = document.querySelectorAll('.list-group-item');
    const products = document.querySelectorAll('#product-list .col-md-4');
    const filterNameInput = document.getElementById('filterName');
    const filterPriceMinInput = document.getElementById('filterPriceMin');
    const filterPriceMaxInput = document.getElementById('filterPriceMax');
    const applyFiltersButton = document.getElementById('applyFilters');

     // Funktsioon filtrite rakendamiseks
    function applyFilters() {
        const selectedCategory = document.querySelector('.list-group-item.active').getAttribute('data-category');
        const filterName = filterNameInput.value.toLowerCase();
        const filterPriceMin = parseFloat(filterPriceMinInput.value) || 0;
        const filterPriceMax = parseFloat(filterPriceMaxInput.value) || Infinity;

        // Läbi iga toote ja kontrolli, kas see vastab filtri kriteeriumitele
        products.forEach(product => {
            const productName = product.getAttribute('data-name').toLowerCase();
            const productPrice = parseFloat(product.getAttribute('data-price'));
            const productCategory = product.getAttribute('data-category');

                 // Kontrolli, kas toode vastab filtri kriteeriumiteles
            const matchesCategory = selectedCategory === 'Kõik' || productCategory === selectedCategory;
            const matchesName = productName.includes(filterName);
            const matchesPrice = productPrice >= filterPriceMin && productPrice <= filterPriceMax;

            // Näita või peida toode filtri tulemuste põhjal
            if (matchesCategory && matchesName && matchesPrice) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    // Sündmuste kuulajad kategooria valimiseks ja filtri rakendamiseks
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            categoryItems.forEach(ci => ci.classList.remove('active'));
            this.classList.add('active');
            applyFilters();
        });
    });

    applyFiltersButton.addEventListener('click', applyFilters);
});

document.addEventListener('DOMContentLoaded', function() {
    const categoryItems = document.querySelectorAll('.list-group-item');
    const products = document.querySelectorAll('#product-list .col-md-4');
    const filterNameInput = document.getElementById('filterName');
    const filterPriceMinInput = document.getElementById('filterPriceMin');
    const filterPriceMaxInput = document.getElementById('filterPriceMax');
    const applyFiltersButton = document.getElementById('applyFilters');

    // Funktsioon filtrite rakendamiseks
    function applyFilters() {
        const filterName = filterNameInput.value.toLowerCase();
        const filterPriceMin = parseFloat(filterPriceMinInput.value) || 0;
        const filterPriceMax = parseFloat(filterPriceMaxInput.value) || Infinity;

        // Läbi iga toote ja kontrolli, kas see vastab filtri kriteeriumitele
        products.forEach(product => {
            const productName = product.getAttribute('data-name').toLowerCase();
            const productPrice = parseFloat(product.getAttribute('data-price'));

            // Kontrolli, kas toode vastab filtri kriteeriumitele
            const matchesName = productName.includes(filterName);
            const matchesPrice = productPrice >= filterPriceMin && productPrice <= filterPriceMax;

            // Näita või peida toode filtri tulemuste põhjal
            if (matchesName && matchesPrice) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

       // Sündmuste kuulaja rakenda nuppudele
    applyFiltersButton.addEventListener('click', applyFilters);
});