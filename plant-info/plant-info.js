import { renderInfo } from './render-plant-info.js';
import * as su from '../storage-utils.js';

const swapButton = document.getElementById('swap-button');
const renderPlants = document.getElementById('render-plants');

const userPlants = su.getPlants(); 

userPlants.forEach(plant => {
    const newPlant = renderInfo(plant);
    renderPlants.appendChild(newPlant); 
});

swapButton.addEventListener('click', () => {
    window.location.replace('../pick-plant/');
});
