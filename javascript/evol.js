

    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');

    thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        thumbnails.forEach(img => img.classList.remove('thumbnail--active'));
        thumbnail.classList.add('thumbnail--active');
        mainImage.src = thumbnail.src;
    });
});


    document.querySelectorAll('.modification__options').forEach(group => {
    group.addEventListener('click', e => {
        if (e.target.classList.contains('option')) {
            group.querySelectorAll('.option').forEach(btn => btn.classList.remove('option--active'));
            e.target.classList.add('option--active');
        }
    });
});
