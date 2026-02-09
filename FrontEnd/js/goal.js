// --------- STATE ----------
let points = 0;
let progress = 0;

const pointsEl = document.querySelector(".points");
const progressFill = document.querySelector(".progress-fill");

// --------- HELPERS ----------
function updateUI() {
  pointsEl.innerText = `⭐ Points: ${points}`;
  progressFill.style.width = progress + "%";
}

function showAlert(msg) {
  alert(msg);
}

// --------- TASK 1: BASIC DETAILS ----------
function validateBasicDetails() {
  const inputs = document.querySelectorAll(".task-card")[0].querySelectorAll("input");

  const name = inputs[0].value.trim();
  const age = Number(inputs[1].value);
  const phone = inputs[2].value.trim();

  if (!name || !age || !phone) {
    showAlert("Please fill all basic details");
    return;
  }

  if (age <= 18 || age >= 60) {
    showAlert("Age must be between 18 and 60");
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    showAlert("Phone number must be exactly 10 digits");
    return;
  }

  points += 20;
  progress += 30;
  updateUI();

  showAlert("Basic details completed! +20 points");
}

// --------- TASK 2: IDENTITY DETAILS ----------
function validateIdentityDetails() {
  const inputs = document.querySelectorAll(".task-card")[1].querySelectorAll("input, textarea");

  const pan = inputs[0].value.trim();
  const aadhaar = inputs[1].value.trim();
  const address = inputs[2].value.trim();

  if (!pan || !aadhaar || !address) {
    showAlert("Please fill all identity details");
    return;
  }

  if (!/^\d{12}$/.test(aadhaar)) {
    showAlert("Aadhaar number must be exactly 12 digits");
    return;
  }

  points += 30;
  progress += 40;
  updateUI();

  showAlert("Identity details completed! +30 points");
}

// --------- TASK 3: KYC ----------
function completeKYC() {
  points += 50;
  progress = 100;
  updateUI();

  showAlert("KYC completed! Profile unlocked 🎉");
}
function goToLearn() {
  // Prototype: assume KYC success
  window.location.href = "learn.html";
}
