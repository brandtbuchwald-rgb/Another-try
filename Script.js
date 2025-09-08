// List of possible stats
const statOptions = ["HP", "Attack", "Defense", "Crit Rate", "Crit Damage"];

// Setup dropdowns for each gear piece
document.querySelectorAll(".stat-inputs").forEach(div => {
  for (let i = 0; i < 4; i++) {
    const row = document.createElement("div");
    row.classList.add("stat-row");

    const select = document.createElement("select");
    statOptions.forEach(stat => {
      const option = document.createElement("option");
      option.value = stat;
      option.textContent = stat;
      select.appendChild(option);
    });

    const input = document.createElement("input");
    input.type = "number";
    input.value = 0;

    row.appendChild(select);
    row.appendChild(input);
    div.appendChild(row);
  }
});

// Tab switching
document.querySelectorAll(".tab-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab-button").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});

// Calculate totals
document.getElementById("calcBtn").addEventListener("click", () => {
  const totals = {};
  document.querySelectorAll(".stat-inputs").forEach(section => {
    section.querySelectorAll(".stat-row").forEach(row => {
      const stat = row.querySelector("select").value;
      const val = parseInt(row.querySelector("input").value) || 0;
      totals[stat] = (totals[stat] || 0) + val;
    });
  });

  // Show results
  let output = "";
  for (const [stat, val] of Object.entries(totals)) {
    output += `${stat}: ${val}\n`;
  }
  document.getElementById("totals").textContent = output || "No stats entered.";
});
