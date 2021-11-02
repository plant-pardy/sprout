import { findById, getPlants, setPlants } from '../storage-utils.js';
import plants from '../plant-data.js';
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


test('setPlants should save plant objects into local storage', (expect) => {
    localStorage.removeItem('PLANTS');
    const expected = {
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
        'bloom-time': 'Mid-summer',
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
        'bloom-time': 'Mid-summer',
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
        'common-name': 'Swiss Cheese plant',
        'genus': 'Monstera  Deliciosa',
        'care-level': '3',
        'family': 'Aracea',
        'plant-type': 'Tropical, climbing evergreen',
        'mature-size': '3 ft. tall',
        'sun-exposure': 'Bright indirect sunlight, partial shade',
        'soil-type': 'Peat based potting soil, well drained',
        'soil-pH': 'acid or neutral',
        'bloom-time': 'Mid-summer',
        'native-area': 'Central America',
        'propagation': 'Yes',
        'toxicity': 'Toxic to cats and dogs ',
    };
    const actual = findById(plants, 1);
    expect.deepEqual(actual, expected);
});