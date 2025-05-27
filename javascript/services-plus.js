document.addEventListener('DOMContentLoaded', () => {
    const plusIcons = document.querySelectorAll('.product-card__icon');

    plusIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            // Здесь можно заменить alert на логику добавления в корзину
            alert('Товар добавлен в корзину!');
        });
    });
});
