import { findById, getPlants, setPlants } from '../storage-utils.js';
import plants from '../plant-data.js';
import { renderPlant } from '../pick-plant/render-plant.js';
import { renderInfo } from '../plant-info/render-plant-info.js';
// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('renderPlant should return an HTML snippet', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const expected = `<div class="plant-card"><h2>Swiss Cheese plant</h2><input type="checkbox" id="1" class="add-check"><img src="./assets/plant-images/monstera-deliciosa.jpg"><h2>Care level: 3</h2></div>`;
    const SwissCheesePlant = plants[0];
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPlant(SwissCheesePlant).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('setPlants should save plant objects into local storage', (expect) => {
    localStorage.removeItem('PLANTS');
    const expected = {
        'id': 1,
        'img': './assets/plant-images/monstera-deliciosa.jpg',
        'common-name': 'Swiss Cheese plant',
        'genus': 'Monstera  Deliciosa',
        'care-level': 3,
        'family': 'Aracea',
        'plant-type': 'Tropical, climbing evergreen',
        'mature-size': '3 ft. tall',
        'sun-exposure': 'Bright indirect sunlight, partial shade',
        'soil-type': 'Peat based potting soil, well drained',
        'soil-pH': 'acid or neutral',
        'growing-season': 'Mid-summer',
        'native-area': 'Central America',
        'propagation': 'Yes',
        'toxicity': 'Toxic to cats and dogs ',
    };
    setPlants(expected);
    const actualString = localStorage.getItem('PLANTS');
    const actual = JSON.parse(actualString);
    expect.deepEqual(actual, expected);

});

test('getPlants should return plant objects from local storage', (expect) => {
    const plantObject = {
        'id': 1,
        'common-name': 'Swiss Cheese plant',
        'genus': 'Monstera  Deliciosa',
        'care-level': '3',
        'family': 'Aracea',
        'plant-type': 'Tropical, climbing evergreen',
        'mature-size': '3 ft. tall',
        'sun-exposure': 'Bright indirect sunlight, partial shade',
        'soil-type': 'Peat based potting soil, well drained',
        'soil-pH': 'acid or neutral',
        'growing-season': 'Mid-summer',
        'native-area': 'Central America',
        'propagation': 'Yes',
        'toxicity': 'Toxic to cats and dogs ',
    };
    setPlants(plantObject);
    const actual = getPlants();
    expect.deepEqual(actual, plantObject);
});

test('findById should return item from plant-data array with matching id', (expect) => {
    const expected = {
        'id': 1,
        'img': './assets/plant-images/monstera-deliciosa.jpg',
        'common-name': 'Swiss Cheese plant',
        'genus': 'Monstera  Deliciosa',
        'care-level': 3,
        'family': 'Aracea',
        'plant-type': 'Tropical, climbing evergreen',
        'mature-size': '3 ft. tall',
        'sun-exposure': 'Bright indirect sunlight, partial shade',
        'soil-type': 'Peat based potting soil, well-drained',
        'soil-pH': 'Acidic or neutral',
        'growing-season': 'Mid-summer',
        'native-area': 'Central America',
        'propagation': 'Yes',
        'toxicity': 'Toxic to cats and dogs.',
    };
    const actual = findById(plants, 1);
    expect.deepEqual(actual, expected);
});

test('renderInfo should return an HTML snippet', (expect) => {
    const expected = `<tr><td>Swiss Cheese plant</td><td>Monstera  Deliciosa</td><td>3</td><td>Aracea</td><td>Tropical, climbing evergreen</td><td>3 ft. tall</td><td>Bright indirect sunlight, partial shade</td><td>Peat based potting soil, well-drained</td><td>Acidic or neutral</td><td>Mid-summer</td><td>Central America</td><td>Yes</td><td>Toxic to cats and dogs.</td></tr>`;   
    const actual = renderInfo(plants[0]).outerHTML;

    expect.deepEqual(actual, expected);
});
