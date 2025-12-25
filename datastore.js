function log(...args) {
  const el = document.getElementById("log");
  if (el) el.textContent += "\n" + args.join(" ");}

function errorLog(...args) {
  const el = document.getElementById("log");
  if (el) el.textContent += "\n❌ " + args.join(" "); }

/* datastore.js */

const DataStore = {
  cache: {},

  async get(listName) {
    log("➡️ DataStore.get called:", listName);

    if (this.cache[listName]) {
      log("✅ Cache hit:", listName);
      return this.cache[listName];
    }

    const url = `data/${listName}.json`;
    log("🌐 Fetching:", url);

    try {
      const response = await fetch(url);

      log("📡 HTTP status:", response.status);

      if (!response.ok) {
        throw new Error("HTTP " + response.status);
      }

      const data = await response.json();
      log("📦 Loaded rows:", data.length);

      this.cache[listName] = data;
      return data;

    } catch (e) {
      errorLog("Failed to load", url, e.message);
      throw e;
    }
  }
};
