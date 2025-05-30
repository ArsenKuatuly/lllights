document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tabs__button");
    const tabPanes = document.querySelectorAll(".tabs__pane");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.dataset.tab;

            tabButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            tabPanes.forEach(pane => {
                pane.classList.toggle("active", pane.id === target);
            });
        });
    });

    // Аккордеоны
    document.querySelectorAll(".accordion__title").forEach(title => {
        title.addEventListener("click", () => {
            const content = title.nextElementSibling;
            const isOpen = title.classList.contains("open");

            document.querySelectorAll(".accordion__title").forEach(t => t.classList.remove("open"));
            document.querySelectorAll(".accordion__content").forEach(c => c.style.display = "none");

            if (!isOpen) {
                title.classList.add("open");
                content.style.display = "block";
            }
        });
    });
});
