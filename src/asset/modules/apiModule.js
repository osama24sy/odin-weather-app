async function getDataFromApi() {
  let city = localStorage.getItem('city');
  if (!city) {
    city = 'damascus';
  }
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=3f3e91e396b75a5db409acf255e2480d`);
  const data = await response.json();
  return data;
}
/*
async function getBackground() {
  let city = localStorage.getItem('city');
  if (!city) {
    city = 'damascus';
  }
  const response = await fetch(`https://pixabay.com/api/?key=MY_API_KEY&q=${city}&image_type=photo&orientation=horizontal&pretty=true`);
  const data = await response.json();
  // const inner = document.getElementById('weather-inner');
  console.log(data);
  return data.hits[0].webformatURL;
  // console.log(data.hits[0].largeImageURL);
}
*/

// eslint-disable-next-line import/prefer-default-export
export { getDataFromApi };
