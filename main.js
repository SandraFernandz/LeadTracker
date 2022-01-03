'use strict';

console.log('>> Ready :)');

//  * chrome://extensions/ * is where you upload the browser extension

let myLeads = [];
let oldLeads = [];

const input = document.querySelector('.js-input');
const addButton = document.querySelector('.js-addButton');
const deleteButton = document.querySelector('.js-deleteButton');
const saveTabButton = document.querySelector('.js-saveTabButton');
const list = document.querySelector('.js-list');

// listen to click event to save the tab

function handleSaveTab() {
  // grab the URL of the current tab
  //chrome is an object with have access to when we are online. tabs is a key of this object. query is a method of this object. active stands for current tab
  // note: add permission "tabs" at manifest.json
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    renderLeads(myLeads);
  });
}

saveTabButton.addEventListener('click', handleSaveTab);

//localStorage.clear();

let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));

//if leadsFromLocalStorage is truthy, set myLeads ot its value and call render leads
// by using the myLeads parameter, we ensure that only the "newest" leads are being deleted
if (leadsFromLocalStorage) {
  //leads of former sessions appear when opening our chrome extension
  myLeads = leadsFromLocalStorage;
  renderLeads(myLeads);
}

// empty localStorage with click event

function handleEmptyLocalStorage() {
  console.log('emptying in process');
  localStorage.clear();
  myLeads = [];
  renderLeads(myLeads);
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
  renderLeads(myLeads);
  //to verify that it works
  console.log(localStorage.getItem('myLeads'));
}

addButton.addEventListener('click', handleButtonClick);

// we refactor the renderLeads function and improve it adding a "leads" parameter that allows us to decide if we want to render the current session leads or older leads

function renderLeads(leads) {
  let listItems = '';
  for (let i = 0; i < leads.length; i++) {
    console.log(leads[i]);
    listItems += `<li><input type ="checkbox" class ="delItemBtn"><a href='${leads[i]}' target='_blank' class='list-link'> ${leads[i]} </a></li>`;
  }
  list.innerHTML = listItems;
}

// delete link after checking  box and clicking delete item button

const deleteItemBtn = document.querySelector('.js-deleteItemButton');

function handleEraseListItem() {
  console.log('el boton funciona');
  if (lisItems[i].checked) {
    console.log(listItems[i]);
  }
  markedElement.remove();
}

deleteItemBtn.addEventListener('click', handleEraseListItem);
