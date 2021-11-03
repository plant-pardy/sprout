import plants from '../plant-data.js';
import { renderPlant } from './render-plant.js';
// import { getPlants, setPlants, findById } from '../storage-utils.js';

// grab elements for the DOM
const renderPlants = document.getElementById('render-plants');
const submit = document.getElementById('submit');

// HEADER ====================================== 
// includes app name and team name

// MAIN ========================================
// display "click on up to 3 plants, then submit"

plants.forEach(plant => {
    // append to section "render-plants" cards to display minimal plant data (vertically):
    //      plant common-name
    //      plant image
    //      plant care-level
    const newCard = renderPlant(plant);
    renderPlants.append(newCard);
});

submit.addEventListener('click', () => {
    // store count of all checked input boxes using querySelectorAll 

    // if checked boxes === 0, then
    //      alert "pick at least one plant"
    // else if checked boxes > 3, then
    //      alert "easy there, gard'ner - only 3 plants" 
    // else
    //      store checked items into localStorage
    //      send user to ../plant-info

    window.location.replace('../plant-info/');
});
