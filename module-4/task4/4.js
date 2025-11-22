'use strict';

const form = document.getElementById('searchForm');
const results = document.getElementById('results');

form.addEventListener('submit', async (evt) => {
  evt.preventDefault();

  const query = document.getElementById('query').value;
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;

  const response = await fetch(url);
  const data = await response.json();

  results.innerHTML = '';

  data.forEach(item => {
    const show = item.show;

    const article = document.createElement('article');

    const h2 = document.createElement('h2');
    h2.textContent = show.name;

    const link = document.createElement('a');
    link.href = show.url;
    link.target = "_blank";
    link.textContent = "Show details";

    const img = document.createElement('img');
    img.src = show.image
      ? show.image.medium
      : "https://placehold.co/210x295?text=Not%20Found";
    img.alt = show.name;

    const summary = document.createElement('div');
    summary.innerHTML = show.summary;

    article.appendChild(h2);
    article.appendChild(link);
    article.appendChild(img);
    article.appendChild(summary);

    results.appendChild(article);
  });
});
