// import { getBackground } from './apiModule';

const createInnerWeatherSection = (weather) => {
  const container = document.createElement('div');
  container.id = 'weather-inner-inner';

  const essential = document.createElement('div');
  essential.id = 'essential';

  const main = document.createElement('p');
  main.innerText = `${weather.weather[0].main}`;

  const cityName = document.createElement('p');
  cityName.innerText = `${weather.name}`;
  cityName.id = 'city-name';

  const temp = document.createElement('p');
  temp.innerText = `${weather.main.temp}° C`;
  temp.id = 'temp';
  temp.setAttribute('unit', 'C');
  temp.addEventListener('click', () => {
    if (temp.getAttribute('unit') === 'C') {
      temp.innerText = `${Math.round(((weather.main.temp * 9) / 5) + 32)}° F`;
      temp.setAttribute('unit', 'F');
    } else {
      temp.innerText = `${weather.main.temp}° C`;
      temp.setAttribute('unit', 'C');
    }
  });

  essential.appendChild(main);
  essential.appendChild(cityName);
  essential.appendChild(temp);

  const details = document.createElement('div');
  details.id = 'details';

  const feel = document.createElement('p');
  feel.innerText = `Feels like: ${weather.main.feels_like}°`;

  const humidity = document.createElement('p');
  humidity.innerText = `Humidity: ${weather.main.humidity}%`;

  const pressure = document.createElement('p');
  pressure.innerText = `Pressure: ${weather.main.pressure} Pa`;

  details.appendChild(feel);
  details.appendChild(humidity);
  details.appendChild(pressure);

  container.appendChild(essential);
  container.appendChild(details);

  return container;
};

const createWeatherImg = (weather) => {
  const imgCont = document.createElement('div');
  imgCont.id = 'weather-image';

  const img = new Image();
  // getBackground().then((e) => {
  //   img.src = e;
  // });
  img.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;

  imgCont.appendChild(img);
  return imgCont;
};

const renderWeather = (weather) => {
  const weatherSection = document.getElementById('weather-section');
  weatherSection.innerHTML = '';

  const weatherInner = document.createElement('div');
  weatherInner.id = 'weather-inner';
  weatherInner.appendChild(createInnerWeatherSection(weather));
  weatherInner.appendChild(createWeatherImg(weather));

  weatherSection.appendChild(weatherInner);

  console.log(weather);
};

export default renderWeather;
