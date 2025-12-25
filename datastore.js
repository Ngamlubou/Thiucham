/* datastore.js */

const DataStore = {
  cache: {},

async get(listName) {
  if (this.cache[listName]) return this.cache[listName];

  const response = await fetch(`data/${listName}.json`);

  if (!response.ok) {
    throw new Error(`Failed to load data/${listName}.json`);
  }

  const data = await response.json();
  this.cache[listName] = data;
  return data;
}
};
