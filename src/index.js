import getDataFromApi from './asset/modules/apiModule';
import createHeader from './asset/modules/header';
import './asset/style/style.scss';

const body = document.querySelector('body');
const content = document.createElement('div');
content.id = 'content';
body.appendChild(content);

getDataFromApi();
createHeader();
