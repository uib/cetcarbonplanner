const storagekey = "datasets";
/** These function handle writing data to localstorage. You can expand this to cloud storage without changing code elsewhere,
 * given that the basic functionality remains the same.
 */
export function updateLimits(limits) {
  window.localStorage.setItem("limits", JSON.stringify(limits));
}

export function getLimits() {
  if (!window.localStorage.hasOwnProperty("limits")) {
    return { tripCarbonLimit: 0, meetingCarbonLimit: 0 };
  } else {
    return JSON.parse(window.localStorage.getItem("limits"));
  }
}

export function updateStorage(datasets) {
  window.localStorage.setItem(storagekey, JSON.stringify(datasets));
}

export function getStorage() {
  //returns an empty array instead of null, if there is nothing stored.
  return JSON.parse(readStorage()) || [];
}

function readStorage() {
  return window.localStorage.getItem(storagekey);
}

export function clearStorage() {
  window.localStorage.clear();
}

export function areThereAnyDatasets() {
  return true;
}

export function saveDatasetsToDisk() {
  const date = new Date();
  const filename = "CarbonPlanner-ExportedData-" + date.toISOString();
  const element = document.createElement("a");
  const text = readStorage();
  /*The above call might return an empty array, which would be useless (and harmless) data,
  but it is guarded by the button not being disabled if datasets length is zero. */
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
