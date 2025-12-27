/* ========= GLOBAL STATE ========= */
let currentSongs = [];
let currentIndex = -1;

const listEl = document.getElementById("songList");
const detailEl = document.getElementById("songDetail");

function renderSongList(songArray) {
  currentSongs = songArray;        // 🔹 track active list
  listEl.innerHTML = "";
  detailEl.style.display = "none"; // 🔹 hide detail
  listEl.style.display = "block";  // 🔹 show list

  songArray.forEach((song, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span class="id">${song.ID}</span>
      <span class="title">${song.Title}</span>
    `;

    li.onclick = () => showSongDetail(index); // 🔹 navigation
    listEl.appendChild(li);
  });
}

function showSongDetail(index) {
  currentIndex = index;
  const song = currentSongs[index];

  listEl.style.display = "none";
  detailEl.style.display = "block";

  detailEl.innerHTML = `
    <h2>${song.ID}</h2> 
   <h2>${song.Title}</h2>
    <p><strong>Key:</strong> ${song.Key || "⚪"}</p>
    <p><strong>Time signature:</strong> ${song["Time signature"] || "⚪"}</p>

    <div class="lyrics">${song.Lyrics}</div> `;}

/* ========= DEFAULT VIEW ========= */
renderSongList(Hiuna_Khomlui);
