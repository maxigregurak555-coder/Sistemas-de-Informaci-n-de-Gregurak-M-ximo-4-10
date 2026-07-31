// Ejemplo aplicando conceptos del código JS moderno
const boton = document.querySelector("#btn-saludo");
const mensaje = document.querySelector("#mensaje-interactivo");

boton.addEventListener("click", (evento) => {
    console.log("Botón clickeado", evento.target);
    mensaje.textContent = "¡Gracias por recordar estos goles históricos de D10S!";
    mensaje.style.color = "#0056b3";
    mensaje.style.fontWeight = "bold";
});

// Array de prueba usando programación funcional y objetos
const golesHistoricos = [
    { rival: "Albacete", año: 2005, asistencia: "Ronaldinho" },
    { rival: "Croacia", año: 2006, asistencia: "Presión individual" }
];

golesHistoricos.forEach(gol => {
    console.log(`Gol registrado a ${gol.rival} en el año ${gol.año}`);
});