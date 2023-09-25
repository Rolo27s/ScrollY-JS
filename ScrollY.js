// Función para manejar el evento de desplazamiento con la rueda del ratón
function handleMouseWheel(event) {
    // Obtén la cantidad de desplazamiento producido por la rueda del ratón
    var delta = event.deltaY || event.detail || event.wheelDelta;
    
    // Define la cantidad de desplazamiento que deseas hacer
    var scrollAmount = 100; // Cambia esto según tus necesidades
    
    // Calcula la dirección del desplazamiento
    var direction = delta < 0 ? -1 : 1;
    
    // Calcula la nueva posición del scroll
    var currentScroll = window.scrollY;
    var newScroll = currentScroll + direction * scrollAmount;
    
    // Realiza el desplazamiento suave utilizando una animación
    window.scrollTo({
        top: newScroll,
        behavior: 'smooth'
    });
}

// Agrega el evento de desplazamiento a la rueda del ratón
window.addEventListener('wheel', handleMouseWheel);
