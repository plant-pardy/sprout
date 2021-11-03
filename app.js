// import functions and grab DOM elements
// import plants from './plant-data.js';
// import { getPlants, setPlants, findById } from './storage-utils.js';

const button1 = document.getElementById('pick-plants');
const button2 = document.getElementById('plant-info');
// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

button1.addEventListener('click', ()=>{
    button1.textContent = 'Pick your Plants';
    window.location.replace('./pick-plant');

});

button2.addEventListener('click', ()=>{
    button1.textContent = 'Plant Info';
    window.location.replace('./plant-info');
});