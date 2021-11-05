export function renderInfo(plantObject) {

    const plantCard = document.createElement('div');
    const header = document.createElement('h2');
    const img = document.createElement('img');
    const table = document.createElement('table');

    plantCard.classList.add('plant-card');

    for (let key in plantObject) {
        if (key === 'common-name') {
            header.textContent = plantObject[key];
            plantCard.appendChild(header);
        } else if (key !== 'id' && key !== 'img') {
            const tr = document.createElement('tr');
            const th = document.createElement('th');
            th.textContent = String(key);
            const td = document.createElement('td');
            td.textContent = plantObject[key];
            tr.append(th, td);
            table.append(tr);
        } else if (key === 'img') {
            img.src = plantObject[key];
        } 
    }

    plantCard.append(header, img, table);

    return plantCard;

}