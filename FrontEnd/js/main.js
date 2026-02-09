function showLogin() {
  document.getElementById("loginModal").style.display = "block";
}

function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

function login() {
  const phone = document.getElementById("loginPhone").value;
  const password = document.getElementById("loginPassword").value;

  if (!phone || !password) {
    alert("Please enter phone number and password");
    return;
  }

  // Temporary login (PoC)
  localStorage.setItem("userPhone", phone);
  window.location.href = "dashboard.html";
}

function start() {
  window.location.href = "goal.html";
}
function toggleSupport() {
  const box = document.getElementById("supportBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
}

function goToAbout() {
  window.open("https://npstrust.org.in/about-nps", "_blank");
}

function goToPredict() {
  window.location.href = "predict.html";
}
