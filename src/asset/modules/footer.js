const createFooter = () => {
  const footer = document.createElement('div');
  footer.id = 'footer';

  const copyrigts = document.createElement('p');
  copyrigts.innerHTML = 'Developed by <a href="https://github.com/osama24sy">Osama Shbib</a> for <a href="https://www.theodinproject.com/">TheOdinProject</a>';

  footer.appendChild(copyrigts);

  return footer;
};

export default createFooter;
