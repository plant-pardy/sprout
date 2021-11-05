// plantObject
// { 
//     id: '1',
//     name: 'Swiss Cheese plant',
//     img: './assets/plants/monstera.png',
//     care-level: 3,
// }

export function renderPlant(plants){

    const clickCard = document.createElement('label');
    clickCard.setAttribute('name', 'click-card');
    //create div for the individial plant called plantCard containing the three plant specs
    const plantCard = document.createElement('div');
    plantCard.classList.add('plant-card');

    //add plant name and care level to header to div
    const plantHeader = document.createElement('h2');
    plantHeader.textContent = plants['common-name'];
    const plantHeader2 = document.createElement('h3');
    plantHeader2.textContent = 'Care level: ' + plants['care-level'];
    
    //add plant image to div
    //plants.img needs to be changed to bracket notation
    const img = document.createElement('img');
    img.src = plants['img'];


    //add an add plant checkbox to div
    const addCheck = document.createElement('input');
    addCheck.setAttribute('name', 'click-card');
    addCheck.setAttribute('type', 'checkbox');
    addCheck.textContent = 'Pick Plant';
    addCheck.id = plants['id'];
    addCheck.classList.add('add-check');
    addCheck.classList.add('hidden');

    //append all the above to the div called plantCard
    clickCard.append(plantHeader, addCheck, img, plantHeader2);
    plantCard.append(clickCard);
    
    return plantCard;
}