//rendering all table elements for plant-info page
export function renderInfo(plantData) {
    const tr = document.createElement('tr');
    
    const tdName = document.createElement('td');
    tdName.textContent = plantData['common-name'];
    
    const tdGenus = document.createElement('td');
    tdGenus.textContent = plantData['genus'];

    const tdCare = document.createElement('td');
    tdCare.textContent = plantData['care-level'];

    const tdFamily = document.createElement('td');
    tdFamily.textContent = plantData['family'];

    const tdType = document.createElement('td');
    tdType.textContent = plantData['plant-type'];

    const tdSize = document.createElement('td');
    tdSize.textContent = plantData['mature-size'];
    
    const tdWater = document.createElement('td');
    tdWater.textContent = plantData['water'];

    const tdExposure = document.createElement('td');
    tdExposure.textContent = plantData['sun-exposure'];
    
    const tdSoil = document.createElement('td');
    tdSoil.textContent = plantData['soil-type'];
    
    const tdPh = document.createElement('td');
    tdPh.textContent = plantData['soil-pH'];
    
    const tdGrow = document.createElement('td');
    tdGrow.textContent = plantData['growing-season'];
    
    const tdNative = document.createElement('td');
    tdNative.textContent = plantData['native-area'];

    const tdProp = document.createElement('td');
    tdProp.textContent = plantData['propagation'];

    const tdToxic = document.createElement('td');
    tdToxic.textContent = plantData['toxicity'];



    tr.append(tdName, tdGenus, tdCare, tdFamily, 
        tdType, tdSize, tdExposure, tdSoil, tdPh, tdGrow, 
        tdNative, tdProp, tdToxic);

    return tr;
}