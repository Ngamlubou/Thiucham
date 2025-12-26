/* datastore.js */

const DataStore = {
  data: null,

  async load(listName) {
    if (this.data) return;
    const response = await fetch(`data/${listName}.json`);
    this.data = await response.json();
  },

  getAll() {
    return this.data || [];
  },

  getByIndex(i) {
    return this.data?.[i] || null;
  }
};
