let speed = 0, rpm = 0, health = 0, fuel = 0;

const healthBar = document.getElementById("health-bar");
const fuelBar = document.getElementById("fuel-bar");
const healthPercent = document.getElementById("health-percent");
const fuelPercent = document.getElementById("fuel-percent");
const speedDisplay = document.getElementById("speed-display");
const speedProgress = document.getElementById("speed-progress-bar");
const rpmDisplay = document.getElementById("rpm-display");
const rpmProgress = document.getElementById("rpm-progress-bar");

// fungsi update semua elemen
function updateAll() {
  healthBar.style.height = health + "%";
  healthPercent.textContent = Math.round(health);

  fuelBar.style.height = fuel + "%";
  fuelPercent.textContent = Math.round(fuel);

  speedDisplay.textContent = String(Math.round(speed)).padStart(3,"0");
  speedProgress.style.width = speed / 200 * 100 + "%";

  rpmDisplay.textContent = String(Math.round(rpm)).padStart(4,"0");
  rpmProgress.style.width = rpm / 8000 * 100 + "%";
}

// klik indikator aktif/nonaktif
document.querySelectorAll(".icon").forEach(btn =>
  btn.addEventListener("click", () => btn.classList.toggle("active"))
);

// panggil awal agar angka tidak kosong
updateAll();
