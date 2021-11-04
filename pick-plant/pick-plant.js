import plants from '../plant-data.js';
import { renderPlant } from './render-plant.js';
import { setPlants, findById } from '../storage-utils.js';
// import { getPlants, setPlants, findById } from '../storage-utils.js';

// grab elements for the DOM
const renderPlants = document.getElementById('render-plants');
const submit = document.getElementById('submit');

let userPlants = [];

plants.forEach(plant => {
    // append to section "render-plants" cards to display minimal plant data (vertically):
    //      plant common-name
    //      plant image
    //      plant care-level
    const newCard = renderPlant(plant);
    renderPlants.append(newCard);
});

submit.addEventListener('click', () => {

    localStorage.removeItem('PLANTS');

    const selected = document.querySelectorAll('input[type=checkbox]:checked');

    if (selected.length < 1) {
        window.alert('Choose at least 1 plant!');
    } else if (selected.length > 3) {
        window.alert('easy there, gard\'ner - pick up to 3 plants');
    } else {

        selected.forEach(element => {   
            const newPlant = findById(plants, Number(element.id)); 
            userPlants.push(newPlant);
        });
        
        setPlants(userPlants); 
        window.location.replace('../plant-info/');
    }

    // ===============================================================
});
