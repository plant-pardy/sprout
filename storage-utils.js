export function findById(items, id){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    } 
}

export function setPlants(plantObject){
    const plantString = JSON.stringify(plantObject);
    localStorage.setItem('PLANTS', plantString);
}

export function getPlants(){
    const plantString = localStorage.getItem('PLANTS');
    return JSON.parse(plantString);
}

export function setSortBy(selectedIndex){
    const sortString = JSON.stringify(selectedIndex);
    sessionStorage.setItem('SORTBY', sortString);
}

export function getSortBy(){
    const sortString = sessionStorage.getItem('SORTBY');
    return JSON.parse(sortString);
}