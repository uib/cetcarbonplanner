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
  return JSON.parse(window.localStorage.getItem(storagekey)) || [];
}
