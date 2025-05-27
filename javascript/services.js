document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".service__toggle");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const service = button.closest(".service");
            const isActive = service.classList.contains("active");

            document.querySelectorAll(".service").forEach(function (s) {
                s.classList.remove("active");
                const toggle = s.querySelector(".service__toggle");
                if (toggle) toggle.textContent = "+";
            });

            if (!isActive) {
                service.classList.add("active");
                button.textContent = "×";
            }
        });
    });
});
