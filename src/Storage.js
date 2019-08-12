const storagekey = "datasets";
const limitkey = "limit";

export function setLimit(limit) {
  window.localStorage.setItem(limitkey, JSON.stringify(limit));
}

export function getLimit() {
  JSON.parse(window.localStorage.getItem(limitkey));
}

export function updateStorage(datasets) {
  window.localStorage.setItem(storagekey, JSON.stringify(datasets));
}

export function getStorage() {
  //returns an empty array instead of null, if there is nothing stored.
  return JSON.parse(window.localStorage.getItem(storagekey)) || [];
}
