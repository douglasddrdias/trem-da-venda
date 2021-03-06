const localStorage = () => (next) => (action) => {
  const response = next(action);
  const { meta } = action;
  if (meta && meta.localStorage) {
    const { key, value } = meta.localStorage;
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  console.log(response);
  return response;
};

export default localStorage;
