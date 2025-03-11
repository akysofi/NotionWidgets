// Función para actualizar hora y fecha
function updateClock() {
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');

  // Mostrar hora en formato HH:MM:SS
  document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;

  // Mostrar fecha en formato extendido en español
  document.getElementById('date').textContent = now.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Ejecutar la función de inmediato
updateClock();
// Actualizar cada segundo
setInterval(updateClock, 1000);
