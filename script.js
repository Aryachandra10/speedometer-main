const needle = document.getElementById('needle');
const speedDisplay = document.getElementById('speed-display');
const gearDisplay = document.getElementById('gear-display');
const healthBar = document.getElementById('health-bar');
const fuelBar = document.getElementById('fuel-bar');
const ticksContainer = document.getElementById('ticks');

// Membuat garis tick RPM
for (let i = 0; i <= 180; i += 10) {
  const tick = document.createElement('div');
  tick.className = 'tick';
  tick.style.transform = `rotate(${i - 90}deg) translateY(-130px)`;
  ticksContainer.appendChild(tick);
}

let speed = 0;
let direction = 1;

function updateGauge() {

  // Simulasi naik turun kecepatan
  if (speed >= 220) direction = -1;
  if (speed <= 0) direction = 1;
  speed += direction * 4;

  // Rotasi jarum (-135° hingga +135°)
  const angle = -135 + (speed / 220) * 270;
  needle.style.transform = `rotate(${angle}deg)`;

  // Update angka speed format 000
  speedDisplay.textContent = String(Math.round(speed)).padStart(3, "0");

  // Logic perpindahan gear
  const gears = ['N', '1', '2', '3', '4', '5', '6'];
  let selectedGear = Math.floor(speed / 40);
  if (selectedGear < 0) selectedGear = 0;
  if (selectedGear > 6) selectedGear = 6;
  gearDisplay.textContent = gears[selectedGear];

  // Update health & fuel (vertikal)
  const health = Math.max(0, 100 - speed / 2);
  const fuel = Math.max(0, 100 - speed / 3);
  healthBar.style.height = `${health}%`;
  fuelBar.style.height = `${fuel}%`;

  // Update angka persentase
  document.getElementById("health-percent").textContent = Math.round(health);
  document.getElementById("fuel-percent").textContent = Math.round(fuel);
}

setInterval(updateGauge, 120);
