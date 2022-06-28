async function getDataFromApi() {
  const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3f3e91e396b75a5db409acf255e2480d');
  const data = await response.json();
  console.log(data);
}

export default getDataFromApi;
