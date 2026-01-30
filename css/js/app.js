const API = "حط_لينك_APPS_SCRIPT_هنا";

function showPage(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById(page).classList.remove("hidden");

  if (page === "dashboard") loadDashboard();
  if (page === "inventory") loadInventory();
}

function loadDashboard() {
  fetch(API + "?action=getInventory")
    .then(r => r.json())
    .then(data => {
      let html = "<h2>Dashboard</h2>";
      data.forEach(i => {
        html += `
          <div class="card">
            <b>${i.name}</b><br>
            Total: ${i.total}
          </div>`;
      });
      document.getElementById("dashboard").innerHTML = html;
    });
}

function loadInventory() {
  fetch(API + "?action=getInventory")
    .then(r => r.json())
    .then(data => {
      let html = "<h2>Inventory</h2>";
      data.forEach(i => {
        html += `<p>${i.name} - ${i.total}</p>`;
      });
      document.getElementById("inventory").innerHTML = html;
    });
}

