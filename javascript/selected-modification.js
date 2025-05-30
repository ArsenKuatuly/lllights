document.querySelectorAll('.modification-mobile__item-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.closest('.modification-mobile__item');
        item.classList.toggle('active');
    });
});
