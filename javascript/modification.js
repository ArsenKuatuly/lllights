document.querySelectorAll('.modification-table__add').forEach(button => {
    button.addEventListener('click', () => {
        const modId = button.dataset.id;

        window.location.href = `/podborka.html?id=${modId}`;
    });
});
