document.querySelectorAll('.podborka__delete').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const row = btn.closest('.podborka__row');
        row.remove();

    });
});


document.querySelectorAll('.podborka__counter button').forEach(btn => {
    btn.addEventListener('click', () => {
        const span = btn.parentElement.querySelector('span');
        let count = parseInt(span.textContent);
        if (btn.textContent === '+' && count < 99) count++;
        if (btn.textContent === '-' && count > 1) count--;
        span.textContent = count;

    });
});
