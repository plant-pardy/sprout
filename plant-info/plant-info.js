import { renderInfo } from './render-plant-info.js';
import plants from '../plant-data.js';
import * as su from '../storage-utils.js';

// get elements for DOM
const swapButton = document.getElementById('swap-button');

// retrieve localStorage

su.setPlants(plants[0]); // TEMPORARY: create placeholder localStorage

// store user's plants from localStorage for rendering
const userPlants = [su.getPlants()]; 

// get table body from HTML
const tbody = document.getElementById('table-body');

// for each plant in the user's localStorage (array), 
//      use renderInfo to create a table row
//      append child table row to table body

userPlants.forEach(plant => {
    const tr = renderInfo(plant);
    tbody.appendChild(tr);      // can we display table row information vertically???
});

swapButton.addEventListener('click', () => {
    // return user to pick-plant
    window.location.replace('../pick-plant/');
});
