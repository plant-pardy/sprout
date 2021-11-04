//rendering all table elements for plant-info page
export function renderInfo(plantObject) {
    // create a container with class 'plant-card'
    // create a table to hold table rows, headers, and data
    // display an image at the top of the card, then
    // create a 2-column table
    //      key on left
    //      value on right
    // 15 key/value pairs
    //      keys are headers <th>
    //      values are data <td>
    
    // for each key in plantData -
    //      if key is NOT image and NOT ID, then
    //          create HTML element tr 
    //          create HTML element th - this is our key
    //          textContent = Plant Object key  
    //          create HTML element td - this is our value
    //          textContent = PlantObject[key]
    //   tr.append (th, td)
    //          table.append (tr)
    //      else if key is img, then
    //          create HTML element img
    //          add img src attribute
    //          append to container 'plant-card'
    //
    // append table to plantCard
    // append plantCard to render-plants
    // return render-plants

    const plantCard = document.createElement('div');
    const table = document.createElement('table');

    plantCard.classList.add('plant-card');

    for (let key in plantObject) {
        if (key !== 'id' && key !== 'img') {
            const tr = document.createElement('tr');
            const th = document.createElement('th');
            th.textContent = String(key);
            const td = document.createElement('td');
            td.textContent = plantObject[key];
            tr.append(th, td);
            table.append(tr);
        } else if (key === 'img') {
            const img = document.createElement('img');
            img.src = plantObject[key];
            plantCard.appendChild(img);
        } 
    }

    plantCard.appendChild(table);

    return plantCard;

}