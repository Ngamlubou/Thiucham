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
 const row = rows.find(r => String(r.ID) === String(id));
 
  renderDetailUI(listName, row);

  document.getElementById("backBtn").onclick = () => {
    showList(listName);
  };
}

/* App entry */
const LISTS = ["Hiuna_Khomlui", "Khristen_Madui_Lui"];

document.addEventListener("DOMContentLoaded", () => {
  showList(LISTS[0]);
});
