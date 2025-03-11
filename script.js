function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Convertir a cadenas con 2 dígitos
  let hStr = hours.toString().padStart(2, '0');
  let mStr = minutes.toString().padStart(2, '0');
  let sStr = seconds.toString().padStart(2, '0');

  // Separar cada dígito
  document.getElementById('hourTens').textContent   = hStr.charAt(0);
  document.getElementById('hourOnes').textContent   = hStr.charAt(1);
  document.getElementById('minuteTens').textContent = mStr.charAt(0);
  document.getElementById('minuteOnes').textContent = mStr.charAt(1);
  document.getElementById('secondTens').textContent = sStr.charAt(0);
  document.getElementById('secondOnes').textContent = sStr.charAt(1);

  // Día de la semana en español (abreviado)
  const days = ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'];
  let dayName = days[now.getDay()];
  document.getElementById('dayDisplay').textContent = dayName;
}

// Ejecutar al cargar
updateClock();
// Actualizar cada segundo
setInterval(updateClock, 1000);


