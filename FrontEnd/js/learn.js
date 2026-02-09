function selectTier(tier) {
  localStorage.setItem("selectedTier", tier);
  alert(`${tier} selected successfully`);
  window.location.href = "dashboard.html";
}
