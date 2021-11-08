import plants from '../plant-data.js';
import * as sort from '../sort-plants.js';
import { renderPlant } from './render-plant.js';
import { setPlants, findById } from '../storage-utils.js';

const renderPlants = document.getElementById('render-plants');
const submit = document.getElementById('submit');

let userPlants = [];

sort.sortCareLevelAscending(plants);

plants.forEach(plant => {
    const newCard = renderPlant(plant);
    renderPlants.append(newCard);
});

submit.addEventListener('click', () => {

    localStorage.removeItem('PLANTS');

    const selected = document.querySelectorAll('input[type=checkbox]:checked');

    if (selected.length < 1) {
        window.alert('Choose at least 1 plant!');
    } else if (selected.length > 3) {
        window.alert('Easy there, gard\'ner - you can only select up to 3 plants.');
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
