//rendering all table elements for plant-info page
export function renderInfo(plantObject) {
    // create a 2-column table
    //      key on left
    //      value on right
    // 15 key/value pairs
    //      keys are headers <th>
    //      values are data <td>

    // grab element table from plant-info HTML
    
    // for each element in plantData
    //      create HTML element tr 
    //      create HTML element th - this is our key
    //      textContent = Plant Object element  
    //      create HTML element td - this is our value
    //      textContent = element.value
    //      tr.append (th, td)
    //      table.append (tr)

    const renderPlants = document.createElement('table');

    for (let key in plantObject) {
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        th.textContent = String(key);
        const td = document.createElement('td');
        td.textContent = plantObject[key];
        tr.append(th, td);
        renderPlants.append(tr);
    }

    return renderPlants;

}