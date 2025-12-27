/* ========= GLOBAL STATE ========= */
let baseSongs = []; 
let currentSongs = [];
let currentIndex = -1;

const searchInput = document.getElementById("searchInput");
const listEl = document.getElementById("songList");
const detailEl = document.getElementById("songDetail");

function switchDataset(songArray) {
  baseSongs = songArray;   // 🔹 set master list
  searchInput.value = "";  // 🔹 reset search

document.getElementById("viewName").textContent =
    songArray === Hiuna_Khomlui ? "Hiuna Khomlui" :
    songArray === Khristen_Madui_Lui ? "Khristen Madui Lui" :
    songArray === Luisan ? "Luisan" :"";
  
renderSongList(baseSongs);}

function renderSongList(songArray) {
  currentSongs = songArray;   // 🔹 ONLY update visible list

  listEl.innerHTML = "";
  detailEl.style.display = "none";
  listEl.style.display = "block";

  songArray.forEach((song, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
    <span class="id">${song.ID}</span>
   <span class="title">${song.Title}</span>   `;

    li.onclick = () => showSongDetail(index);
    listEl.appendChild(li); });}

function toggleSearch() {
  if (searchInput.style.display === "none") {
    searchInput.style.display = "block";
    searchInput.focus();
  } else {
    searchInput.value = "";
    searchInput.style.display = "none";
    renderSongList(baseSongs);  }}

searchInput.addEventListener("input", () => { const q = searchInput.value.trim().toLowerCase();

  if (!q) {  currentSongs = baseSongs;
    renderSongList(baseSongs);
    return;  }

  const filtered = baseSongs.filter(song => (
    (song.ID && song.ID.toLowerCase().includes(q)) ||
    (song.Title && song.Title.toLowerCase().includes(q)) ||
    (song.Translation && song.Translation.toLowerCase().includes(q)) ));

  currentSongs = filtered;
  renderSongList(filtered);});

function showSongDetail(index) {
  currentIndex = index;
  const song = currentSongs[index];

  listEl.style.display = "none";
  detailEl.style.display = "block";

  const translationBlock = song.Translation
    ? `<div class="translation">
         <div>${song.Translation}</div>
       </div>`
    : "";

  detailEl.innerHTML = `
    <h2>${song.ID}</h2>
    <h2>${song.Title}</h2>
   ${translationBlock}
    <p><strong>Key:</strong> ${song.Key || "⚪"}</p>
    <p><strong>Time signature:</strong> ${song["Time signature"] || "⚪"}</p>

    <div class="lyrics">${song.Lyrics}</div> `;}
/* ========= DEFAULT VIEW ========= */
switchDataset(Hiuna_Khomlui);
