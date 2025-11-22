'use strict';

const jokeForm = document.getElementById('jokeForm');
const jokeResults = document.getElementById('jokeResults');

jokeForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();

  const term = document.getElementById('jokeQuery').value;
  const url = `https://api.chucknorris.io/jokes/search?query=${term}`;

  const response = await fetch(url);
  const data = await response.json();

  jokeResults.innerHTML = '';

  data.result.forEach(joke => {
    const article = document.createElement('article');
    const p = document.createElement('p');
    p.textContent = joke.value;
    article.appendChild(p);
    jokeResults.appendChild(article);
  });
});
