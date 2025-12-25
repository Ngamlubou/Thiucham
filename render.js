/* render.js */

let app;

document.addEventListener("DOMContentLoaded", () => {
  app = document.getElementById("app");
});

/* List UI snippet */
function renderListUI(listName, rows) {
  app.innerHTML = `
    <h2>${listName.toUpperCase()}</h2>
    <ul class="list">
      ${rows.map(row => `
        <li data-id="${row.id}">
          <strong>${row.Title}</strong><br>
          <small>${row.Key || ""}</small>
        </li>
      `).join("")}
    </ul>
  `;
}

/* Detail UI snippet */
function renderDetailUI(listName, row) {
  app.innerHTML = `
    <button id="backBtn">← Back</button>
    <h2>${row.Title}</h2>
    <p>${row.Key}</p>
  `;
}
