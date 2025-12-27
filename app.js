/* ========= GLOBAL STATE ========= */
let currentSongs = [];
let currentIndex = -1;

const searchInput = document.getElementById("searchInput");
const listEl = document.getElementById("songList");
const detailEl = document.getElementById("songDetail");

function renderSongList(songArray) {
  baseSongs = songArray;           // 🔹 store full list
  currentSongs = songArray;        // 🔹 working list

  listEl.innerHTML = "";
  detailEl.style.display = "none";
  listEl.style.display = "block";

  songArray.forEach((song, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
    <span class="id">${song.ID}</span>
 <span class="title">${song.Title}</span> `;

    li.onclick = () => showSongDetail(index);
    listEl.appendChild(li); });}

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
         <p>Translation</p>
         <div>${song.Translation}</div>
       </div>`
    : "";

  detailEl.innerHTML = `
    <h2>${song.ID}</h2>
    <h2>${song.Title}</h2><br>
   ${translationBlock}
    <p><strong>Key:</strong> ${song.Key || "⚪"}</p>
    <p><strong>Time signature:</strong> ${song["Time signature"] || "⚪"}</p>

    <div class="lyrics">${song.Lyrics}</div> `;}
/* ========= DEFAULT VIEW ========= */
renderSongList(Hiuna_Khomlui);
