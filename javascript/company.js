
    document.querySelectorAll('.tabs__button').forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');

        document.querySelectorAll('.tabs__button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tabs__pane').forEach(pane => pane.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});
