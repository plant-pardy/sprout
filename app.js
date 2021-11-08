const pickPlants = document.getElementById('pick-plants');
const plantInfo = document.getElementById('plant-info');

pickPlants.addEventListener('click', ()=>{
    window.location.replace('./pick-plant');
});

plantInfo.addEventListener('click', ()=>{
    window.location.replace('./plant-info');
});

