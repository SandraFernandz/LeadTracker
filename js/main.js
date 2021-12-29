'use strict';

console.log('>> Ready :)');

let myLeads = [];

const input = document.querySelector('.js-input');
const button = document.querySelector('.js-button');
const list = document.querySelector('.js-list');

function handleButtonClick() {
  console.log('you clicked me');
  const inputLead = input.value;
  myLeads.push(inputLead);
  console.log(inputLead);
  console.log(myLeads);
  input.value = '';
  renderLeads();
}

button.addEventListener('click', handleButtonClick);

function renderLeads() {
  let listItems = '';
  for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i]);
    listItems += `<li><a href='${myLeads[i]}' target='_blank' class='body-list-link'> ${myLeads[i]} </a></li>`;
  }
  list.innerHTML = listItems;
}
