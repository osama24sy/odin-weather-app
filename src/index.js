import { getDataFromApi } from './asset/modules/apiModule';
import renderWeather from './asset/modules/renderWeather';
import createHeader from './asset/modules/header';
import createFooter from './asset/modules/footer';
import './asset/style/style.scss';

const body = document.querySelector('body');
const content = document.createElement('div');
content.id = 'content';
body.appendChild(content);

getDataFromApi().then((weather) => renderWeather(weather));
createHeader();

const weatherSection = document.createElement('div');
weatherSection.id = 'weather-section';
content.appendChild(weatherSection);
content.appendChild(createFooter());
/*
getBackground().then((response) => {
  weatherSection.style.backgroundImage = `url('${response}')`;
});
*/
