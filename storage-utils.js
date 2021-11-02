export function findById(items, id){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    } 
}

export function setPlant(plantObject){
    const plantString = JSON.stringify(plantObject);
    return localStorage.setItem('PLANT', plantString);
}

export function getPlant(){
    const plantString = localStorage.getItem('PLANT');
    return JSON.parse(plantString);
}