let speedMode = 0; // 0: KMH, 1: MPH, 2: Knots

// Update dari NUI GTA V (FiveM)
window.addEventListener("message", function(event) {
    const data = event.data;

    if (data.type === "updateHUD") {
        setSpeed(data.speed);
        setRPM(data.rpm);
        setFuel(data.fuel);
        setHealth(data.health);
        setGear(data.gear);
        setLeftIndicator(data.leftSignal);
        setRightIndicator(data.rightSignal);
        setEngine(data.engine);
    }
});
const speedDisplay = document.getElementById("speed-display");
const speedProgress = document.getElementById("speed-progress-bar");

const rpmDisplay = document.getElementById("rpm-display");
const rpmProgress = document.getElementById("rpm-progress-bar");

const fuelBar = document.getElementById("fuel-bar");
const fuelPercent = document.getElementById("fuel-percent");

const healthBar = document.getElementById("health-bar");
const healthPercent = document.getElementById("health-percent");

const gearDisplay = document.getElementById("gear-display");

const leftIndicator = document.getElementById("left-signal");
const rightIndicator = document.getElementById("right-icon");
const engineIcon = document.getElementById("engine-icon");

// ====================== FUNCTIONS ===============================

function setSpeed(speed) {
    if (speedMode === 1) speed = speed * 2.236936;
    else if (speedMode === 2) speed = speed * 1.943844;
    else speed = speed * 3.6;

    speedDisplay.textContent = String(Math.round(speed)).padStart(3, "0");

    const progress = Math.min((speed / 200) * 100, 100);
    speedProgress.style.width = progress + "%";
}

function setRPM(rpm) {
    rpmDisplay.textContent = String(Math.round(rpm)).padStart(4, "0");
    const progress = Math.min((rpm / 8000) * 100, 100);
    rpmProgress.style.width = progress + "%";
}

function setFuel(fuel) {
    const pct = fuel * 100;
    fuelBar.style.height = pct + "%";
    fuelPercent.textContent = Math.round(pct);
}

function setHealth(health) {
    const pct = health * 100;
    healthBar.style.height = pct + "%";
    healthPercent.textContent = Math.round(pct);
}

function setGear(gear) {
    if (gear === 0) gearDisplay.textContent = "N";
    else gearDisplay.textContent = gear;
}

function setEngine(state) {
    state ? engineIcon.classList.add("active") : engineIcon.classList.remove("active");
}

function setLeftIndicator(state) {
    state ? leftIndicator.classList.add("active") : leftIndicator.classList.remove("active");
}

function setRightIndicator(state) {
    state ? rightIndicator.classList.add("active") : rightIndicator.classList.remove("active");
}

function setSpeedMode(mode) {
    speedMode = mode;
}
