const createLogo = () => {
  const logo = document.createElement('div');
  logo.id = 'logo';

  const logoTitle = document.createElement('p');
  logoTitle.textContent = 'TheWeatherApp';

  logo.appendChild(logoTitle);

  return logo;
};

const searchForm = () => {
  const form = document.createElement('form');

  const searchBar = document.createElement('input');
  searchBar.id = 'search-bar';
  searchBar.placeholder = 'Enter a city name...';

  const submit = document.createElement('button');
  submit.id = 'search-btn';
  submit.type = 'submit';
  submit.innerText = 'Search';

  form.appendChild(searchBar);
  form.appendChild(submit);

  return form;
};

const createHeader = () => {
  const content = document.getElementById('content');
  const header = document.createElement('div');
  header.id = 'header';

  header.appendChild(createLogo());
  header.appendChild(searchForm());

  content.appendChild(header);
};

export default createHeader;
