'use strict';
const target = document.getElementById('target');
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

for (let i = 0; i < students.length; i++) {
  const opt = document.createElement('option');
  opt.value = students[i].id;
  opt.textContent = students[i].name;
  target.appendChild(opt);
}