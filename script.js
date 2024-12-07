document.addEventListener("DOMContentLoaded", () => {
    const boton_hambur = document.querySelector(".bar-menu");
    const line_1 = document.querySelector(".line1");
    const line_2 = document.querySelector(".line2");
    const line_3 = document.querySelector(".line3");
    const menu = document.getElementById("hambur");
    const logoContainer = document.querySelector(".logo-container");
    const links = menu.querySelectorAll("a");

    // Función para animar las barras del menú
    function animateBars() {
        line_1.classList.toggle("activeline1");
        line_2.classList.toggle("activeline2");
        line_3.classList.toggle("activeline3");
    }

    // Función para abrir y cerrar el menú
    function toggleMenu() {
        menu.classList.toggle("active");

        if (window.innerWidth <= 768) { // Si es móvil (o tablet en landscape)
            // Controlamos la visibilidad del logo
            if (menu.classList.contains("active")) {
                menu.style.transform = "translateX(0%)";
                logoContainer.style.visibility = "hidden";
            } else {
                menu.style.transform = "translateX(-100%)";
                logoContainer.style.visibility = "visible";
            }

            // Animamos las barras del menú
            animateBars();
        }
    }

    // Manejador de clic para el botón de hamburguesa (abre/cierra el menú)
    boton_hambur.addEventListener("click", toggleMenu);

    // Manejador de clic para los enlaces dentro del menú
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

            // Cerramos el menú primero
            if (window.innerWidth <= 768) {
                menu.style.transform = "translateX(-100%)";
                menu.classList.remove("active");

                // Restauramos las barras a su estado inicial
                line_1.classList.remove("activeline1");
                line_2.classList.remove("activeline2");
                line_3.classList.remove("activeline3");

                // Restauramos la visibilidad del logo
                logoContainer.style.visibility = "visible";
            }

            // Desplazamos suavemente a la sección correspondiente
            const target = document.querySelector(link.hash);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

