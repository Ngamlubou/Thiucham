const listEl = document.getElementById("songList");

/**
 * Render song list (ID + Title only)
 */
function renderSongList(songArray) {
  listEl.innerHTML = ""; // clear previous list

  songArray.forEach(song => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span class="id">${song.ID}</span>
      <span class="title">${song.Title}</span>  `;

    listEl.appendChild(li); });}

/* ========= DEFAULT VIEW ========= */
renderSongList(Hiuna_Khomlui);
