'use strict';

const button = document.querySelector('button');

button.addEventListener('click', function () {
  const text = document.getElementById('calculation').value;
  let result;

  if (text.includes('+')) {
    const parts = text.split('+');
    result = Number(parts[0]) + Number(parts[1]);
  } else if (text.includes('-')) {
    const parts = text.split('-');
    result = Number(parts[0]) - Number(parts[1]);
  } else if (text.includes('*')) {
    const parts = text.split('*');
    result = Number(parts[0]) * Number(parts[1]);
  } else if (text.includes('/')) {
    const parts = text.split('/');
    result = Number(parts[0]) / Number(parts[1]);
  } else {
    result = 'Invalid input';
  }

  document.getElementById('result').textContent = result;
});
