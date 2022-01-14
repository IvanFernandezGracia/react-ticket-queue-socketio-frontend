export const getUltimos = async () => {
  const resp = await fetch(`${process.env.REACT_APP_URL_SERVER}/ultimos`);
  const data = await resp.json();

  return data.ultimos;
};
