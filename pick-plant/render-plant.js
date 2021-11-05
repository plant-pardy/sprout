export function renderPlant(plants){

    const clickCard = document.createElement('label');
    clickCard.setAttribute('name', 'click-card');

    const plantCard = document.createElement('div');
    plantCard.classList.add('plant-card');

    const plantName = document.createElement('h2');
    plantName.textContent = plants['common-name'];

    const plantCare = document.createElement('h3');
    switch (plants['care-level']) {
        case 1:
            plantCare.textContent = 'Care level: easiest';
            break;
        case 2:
            plantCare.textContent = 'Care level: easier';
            break;
        case 3: 
            plantCare.textContent = 'Care level: easy';
            break;
        default: 
            plantCare.textContent = `Care level: ${plants['care-level']}`;
            break;
    }
    
    const img = document.createElement('img');
    img.src = plants['img'];

    const addCheck = document.createElement('input');
    addCheck.setAttribute('name', 'click-card');
    addCheck.setAttribute('type', 'checkbox');
    addCheck.textContent = 'Pick Plant';
    addCheck.id = plants['id'];
    addCheck.classList.add('add-check');
    addCheck.classList.add('hidden');

    clickCard.append(plantName, addCheck, img, plantCare);
    plantCard.append(clickCard);
    
    return plantCard;
}