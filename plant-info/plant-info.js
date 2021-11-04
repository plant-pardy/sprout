import { renderInfo } from './render-plant-info.js';
import * as su from '../storage-utils.js';

// get elements for DOM
const swapButton = document.getElementById('swap-button');
const renderPlants = document.getElementById('render-plants');

const userPlants = su.getPlants(); 

// for each plant in the user's localStorage (array), 
//      use renderInfo to create a table
//      append child table to table body

userPlants.forEach(plant => {
    const newPlant = renderInfo(plant);
    renderPlants.appendChild(newPlant); 
});

swapButton.addEventListener('click', () => {
    // return user to pick-plant
    window.location.replace('../pick-plant/');
});
