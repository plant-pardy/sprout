export function findById(items, id){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    } 
}

export function setPlants(plantObject){
    const plantString = JSON.stringify(plantObject);
    return localStorage.setItem('PLANTS', plantString);
}

export function getPlants(){
    const plantString = localStorage.getItem('PLANTS');
    return JSON.parse(plantString);
}