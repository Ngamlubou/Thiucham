/* app.js */

async function showList(listName) {
  const rows = await DataStore.get(listName);
  renderListUI(listName, rows);

  document.querySelectorAll(".list li").forEach(li => {
    li.onclick = () => showDetail(listName, li.dataset.id);
  });
}

async function showDetail(listName, id) {
  const rows = await DataStore.get(listName);
  const row = rows.find(r => r.id === id);

  renderDetailUI(listName, row);

  document.getElementById("backBtn").onclick = () => {
    showList(listName);
  };
}

/* App entry */
const LISTS = ["Luisan", "Hiuna Khomlui", "Khristen Madui Lui"];

document.addEventListener("DOMContentLoaded", () => {
  showList(LISTS[0]);
});
