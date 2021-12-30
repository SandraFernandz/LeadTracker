'use strict';

console.log('>> Ready :)');

//chrome://extensions/ is where you upload the browser extension

let myLeads = [];

const input = document.querySelector('.js-input');
const addButton = document.querySelector('.js-addButton');
const deleteButton = document.querySelector('.js-deleteButton');
const list = document.querySelector('.js-list');

//localStorage.clear();
let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));

//if leadsFromLocalStorage is truthy, set myLeads ot its value and call render leads

if (leadsFromLocalStorage) {
  //leads of former sessions appear when opening our chrome extension
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

// empty localStorage with click event

function handleEmptyLocalStorage() {
  console.log('emptying in process');
  localStorage.clear();
  myLeads = [];
  renderLeads();
}

deleteButton.addEventListener('click', handleEmptyLocalStorage);

// add leads to lead tracker using click event in button

function handleButtonClick() {
  console.log('you clicked me');
  const inputLead = input.value;
  myLeads.push(inputLead);
  console.log(inputLead);
  console.log(myLeads);
  input.value = '';
  //Save the myLeads Array to localStorage
  //PS- remember JSON.stringify
  localStorage.setItem('myLeads', JSON.stringify(myLeads));
  renderLeads();
  //to verify that it works
  console.log(localStorage.getItem('myLeads'));
}

addButton.addEventListener('click', handleButtonClick);

function renderLeads() {
  let listItems = '';
  for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i]);
    listItems += `<li><a href='${myLeads[i]}' target='_blank' class='list-link'> ${myLeads[i]} </a></li>`;
  }
  list.innerHTML = listItems;
}
