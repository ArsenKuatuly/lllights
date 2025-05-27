
    document.getElementById('applyFilter').addEventListener('click', function () {
    const maxPower = document.getElementById('power').value;
    const maxPrice = document.getElementById('price').value;

    document.querySelectorAll('.product-card').forEach(card => {
    const priceText = card.querySelector('.product-card__price').innerText;
    const price = parseInt(priceText.replace(/\D/g, ''));

    // Показываем/скрываем товары по цене
    if (price <= maxPrice) {
    card.style.display = '';
} else {
    card.style.display = 'none';
}
});
});

    document.getElementById('resetFilter').addEventListener('click', function () {
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.display = '';
    });
});
