'use strict';

const form = document.getElementById('searchForm');

form.addEventListener('submit', async (evt) => {
  evt.preventDefault();

  const query = document.getElementById('query').value;
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
});
