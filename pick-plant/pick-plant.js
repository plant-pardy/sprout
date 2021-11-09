import plants from '../plant-data.js';
import * as sort from '../sort-plants.js';
import * as storage from '../storage-utils.js';
import { renderPlant } from './render-plant.js';

const sortSelect = document.getElementById('sort-select');
const renderPlants = document.getElementById('render-plants');
const submit = document.getElementById('submit');

const sortOrder = storage.getSortBy();
let userPlants = [];

if (sortOrder) {
    switch (sortOrder) {
        case 1: 
            sortSelect.selectedIndex = 1; 
            sort.alphaAscending(plants);
            sort.careLevelAscending(plants);
            break;
        case 2: 
            sortSelect.selectedIndex = 2; 
            sort.alphaAscending(plants);
            sort.careLevelDescending(plants);
            break;
        case 3: 
            sortSelect.selectedIndex = 3; 
            sort.alphaAscending(plants);
            break;
        case 4: 
            sortSelect.selectedIndex = 4; 
            sort.alphaDescending(plants);
            break;
        default: 
            sort.alphaAscending(plants);
            break;
    }
}

plants.forEach(plant => {
    const newCard = renderPlant(plant);
    renderPlants.append(newCard);
});

sortSelect.addEventListener('change', () => {
    storage.setSortBy(sortSelect.selectedIndex);
    window.location.reload();
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
            const newPlant = storage.findById(plants, Number(element.id)); 
            userPlants.push(newPlant);
        });
        
        storage.setPlants(userPlants); 
        window.location.replace('../plant-info/');
    }

    // ===============================================================
});
