const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonOn = boton.textContent;

        if (boton.id === "limpiar") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "¡Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                const expresion = pantalla.textContent;
                if (expresion.includes("/0") || expresion.includes("//")) {
                    throw new Error("Expresión inválida");
                }
                pantalla.textContent = eval(expresion);
            } catch (error) {
                pantalla.textContent = "¡Error!";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "¡Error!") {
            pantalla.textContent = botonOn;
        } else {
            pantalla.textContent += botonOn;
        }
    })
})



