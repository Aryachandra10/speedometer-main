// === ELEMENT REFERENSI HTML ===
const speedDisplay   = document.getElementById("speed-display");
const speedProgress  = document.getElementById("speed-progress-bar");
const rpmDisplay     = document.getElementById("rpm-display");
const rpmProgress    = document.getElementById("rpm-progress-bar");
const fuelBar        = document.getElementById("fuel-bar");
const fuelPercent    = document.getElementById("fuel-percent");
const healthBar      = document.getElementById("health-bar");
const healthPercent  = document.getElementById("health-percent");
const gearDisplay    = document.getElementById("gear-display");
const leftSignal     = document.getElementById("left-signal");
const rightSignal    = document.getElementById("right-signal");
const engineIcon     = document.getElementById("engine-icon");


// === EVENT LISTENER UNTUK DATA DARI LUA ===
window.addEventListener("message", function (event) {
    const data = event.data;

    // TAMPILKAN / SEMBUNYIKAN HUD
    if (data.action === "displayHUD") {
        document.body.style.display = data.state ? "flex" : "none";
        return;
    }

    // UPDATE DATA HUD
    if (data.action === "update") {

        // --- SPEED ---
        const speedKmh = Math.round(data.speed * 3.6);
        speedDisplay.textContent = String(speedKmh).padStart(3, "0");
        speedProgress.style.width = (speedKmh / 200) * 100 + "%";

        // --- RPM ---
        rpmDisplay.textContent = String(Math.round(data.rpm)).padStart(4, "0");
        rpmProgress.style.width = (data.rpm / 8000) * 100 + "%";

        // --- FUEL & HEALTH ---
        fuelBar.style.height = (data.fuel * 100) + "%";
        fuelPercent.textContent = Math.round(data.fuel * 100);

        healthBar.style.height = (data.health * 100) + "%";
        healthPercent.textContent = Math.round(data.health * 100);

        // --- GEAR ---
        gearDisplay.textContent = data.gear === 0 ? "N" : data.gear;

        // --- ENGINE ---
        engineIcon.classList.toggle("active", data.engine);

        // --- SEIN OTOMATIS DARI KENDARAAN ---
        leftSignal.classList.toggle("active", data.leftSignal);
        rightSignal.classList.toggle("active", data.rightSignal);
    }
});
