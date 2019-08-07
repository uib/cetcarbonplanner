const storagekey = "datasets";

export function updateStorage(datasets) {
  window.localStorage.setItem(storagekey, JSON.stringify(datasets));
}

export function getStorage() {
  //returns an empty array instead of null, if there is nothing stored.
  return JSON.parse(window.localStorage.getItem(storagekey)) || [];
}
