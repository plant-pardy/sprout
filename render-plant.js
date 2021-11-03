// plantObject
// { 
//     id: '1',
//     name: 'Swiss Cheese plant',
//     img: './assets/plants/monstera.png',
//     care-level: 3,
// }

export function renderPlant(plants){
    //create div for the individial plant called plantCard containing the three plant specs
    const plantCard = document.createElement('div');
    plantCard.classList.add('plant-card');

    //add plant name and care level to header to div
    const plantHeader = document.createElement('h2');
    plantHeader.textContent = plants['common-name'];
    const plantHeader2 = document.createElement('h2');
    plantHeader2.textContent = 'Care level: ' + plants['care-level'];

    //add plant image to div
    //plants.img needs to be changed to bracket notation
    const img = document.createElement('img');
    img.src = plants.img;

    //add an add plant checkbox to div
    const addCheck = document.createElement('INPUT');
    addCheck.setAttribute('type', 'checkbox');
    addCheck.textContent = 'Pick Plant';
    addCheck.id = plants.id;
    addCheck.classList.add('add-check');

    /*
    const addButton = document.createElement('button');
    addButton.textContent = 'Pick Plant';
    addButton.id = plant.id;
    addButton.classList.add('add-button');
    */

    //append all the above to the div called plantCard
    plantCard.append(plantHeader, plantHeader2, addCheck, img);
    return plantCard;
}