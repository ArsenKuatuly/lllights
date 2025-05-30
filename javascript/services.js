document.addEventListener("DOMContentLoaded", () => {
    const services = document.querySelectorAll(".service");

    services.forEach(service => {
        service.addEventListener("click", () => {

            services.forEach(s => {
                if (s !== service) s.classList.remove("active");
            });


            service.classList.toggle("active");
        });
    });
});
