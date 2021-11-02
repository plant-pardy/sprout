import plants from '../plant-data.js';
// plantObject
// { 
//     id: '1',
//     name: 'Swiss Cheese plant',
//     img: './assets/plants/monstera.png',
//     care-level: 3,
// }

export function renderPlant(plant){
    //create div for the individial plant called plantCard containing the three plant specs
    const plantCard = document.createElement('div');
    plantCard.classList.add('plant-card');
    
    //add plant name and care level to header to div
    const plantHeader = document.createElement('h2');
    plantHeader.textContent = 'common-name';
    plantHeader.textContent = 'Care level: ' + 'care-level';

    //add plant image to div
    const img = document.createElement('img');
    img.src = plant.img;

    //add an add plant checkbox to div
    const addCheck = document.createElement('INPUT');
    addCheck.setAttribute('type', 'checkbox');
    addCheck.textContent = 'Pick Plant';
    addCheck.id = plant.id;
    addCheck.classList.add('add-check');

    /*
    const addButton = document.createElement('button');
    addButton.textContent = 'Pick Plant';
    addButton.id = plant.id;
    addButton.classList.add('add-button');
    */

    //append all the above to the div called plantCard
    plantCard.append(plantHeader, addCheck, img);
    return plantCard;
}