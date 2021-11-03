import plants from '../plant-data.js';
import { renderPlant } from './render-plant.js';
import { setPlants } from '../storage-utils.js';
// import { getPlants, setPlants, findById } from '../storage-utils.js';

// grab elements for the DOM
const renderPlants = document.getElementById('render-plants');
const submit = document.getElementById('submit');

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
    const selected = document.querySelectorAll('input:checked');

    // CHECKBOX LOGIC
    // ===============================================================
    //
    // if checked boxes === 0, then
    //      alert "pick at least one plant"
    // else if checked boxes > 3, then
    //      alert "easy there, gard'ner - only 3 plants" 
    // else
    //      store checked items into localStorage
    //      send user to ../plant-info

    if (selected.length < 1) {
        window.alert('Choose at least 1 plant!');
    } else if (selected.length > 3) {
        window.alert('easy there, gard\'ner - pick up to 3 plants');
    } else {
        // console.log(selected); --USE TO CHECK FOR INPUTS
        window.location.replace('../plant-info/');
    }

    // ===============================================================
    setPlants(plants.id);
//console.log(plants.id);
});
