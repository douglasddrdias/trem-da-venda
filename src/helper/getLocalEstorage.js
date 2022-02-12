function getLocalStorage(key, inicial) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return inicial;
  }
}

export default getLocalStorage;
