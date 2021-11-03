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
    const table = document.getElementById('table-body');
    let iterator = 0
    for (let key in plantObject) {
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        th.textContent = String(key);
        const td = document.createElement('td');
        td.textContent = Object.values(plantObject);

    }

    //get the number of times the for loop runs


    // const tr = document.createElement('tr');
    
    // const tdName = document.createElement('td');
    // tdName.textContent = plantData['common-name'];
    
    // const tdGenus = document.createElement('td');
    // tdGenus.textContent = plantData['genus'];

    // const tdCare = document.createElement('td');
    // tdCare.textContent = plantData['care-level'];

    // const tdFamily = document.createElement('td');
    // tdFamily.textContent = plantData['family'];

    // const tdType = document.createElement('td');
    // tdType.textContent = plantData['plant-type'];

    // const tdSize = document.createElement('td');
    // tdSize.textContent = plantData['mature-size'];
    
    // const tdExposure = document.createElement('td');
    // tdExposure.textContent = plantData['sun-exposure'];
    
    // const tdSoil = document.createElement('td');
    // tdSoil.textContent = plantData['soil-type'];
    
    // const tdPh = document.createElement('td');
    // tdPh.textContent = plantData['soil-pH'];
    
    // const tdBloom = document.createElement('td');
    // tdBloom.textContent = plantData['bloom-time'];
    
    // const tdNative = document.createElement('td');
    // tdNative.textContent = plantData['native-area'];

    // const tdProp = document.createElement('td');
    // tdProp.textContent = plantData['propagation'];

    // const tdToxic = document.createElement('td');
    // tdToxic.textContent = plantData['toxicity'];



    // tr.append(tdName, tdGenus, tdCare, tdFamily, 
    //     tdType, tdSize, tdExposure, tdSoil, tdPh, tdBloom, 
    //     tdNative, tdProp, tdToxic);

    // return tr;
}