import plants from '../plant-data.js';
import { renderPlant } from './render-plant.js';
// import { getPlants, setPlants, findById } from '../storage-utils.js';

// grab elements for the DOM
const renderPlants = document.getElementById('render-plants');

// HEADER 
// includes app name and team name

// MAIN
// display "click on up to 3 plants, then submit"

plants.forEach(plant => {
    // append to section "render-plants" cards to display minimal plant data (vertically):
    //      plant common-name
    //      plant image
    //      plant care-level
    const newCard = renderPlant(plant);
    renderPlants.append(newCard);
});

