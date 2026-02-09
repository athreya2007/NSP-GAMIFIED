document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const menuBtn = document.getElementById("menuBtn");
  const profileBtn = document.getElementById("profileBtn");
  const profileMenu = document.getElementById("profileMenu");

  // Sidebar toggle (tap)
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  // Profile menu toggle
  profileBtn.addEventListener("click", () => {
    profileMenu.style.display =
      profileMenu.style.display === "block" ? "none" : "block";
  });
});

// NAVIGATION FUNCTIONS
function goToPredict() {
  window.location.href = "predict.html";
}

function goToGoal() {
  window.location.href = "predict.html";
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}
function goToAboutNPS() {
  window.open("https://npstrust.org.in/about-nps", "_blank");
}
