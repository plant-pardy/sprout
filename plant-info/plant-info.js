import { renderInfo } from './render-plant-info.js';
import plantData from '../plant-data.js';
import * as su from '../storage-utils.js';

// retrieve localStorage

su.setPlants(plantData[0]); // TEMPORARY: create placeholder localStorage

// store user's plants from localStorage for rendering
const userPlants = [su.getPlants()]; 
console.log(userPlants);

// get table body from HTML
const tbody = document.getElementById('table-body');

// for each plant in the user's localStorage (array), use renderInfo to create a table row
// append child table row to table body
userPlants.forEach(plant => {
    const tr = renderInfo(plant);
    tbody.appendChild(tr);
});

// can we display table row information vertically???
