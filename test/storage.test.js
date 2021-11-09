import plants from '../plant-data.js';
import { findById, getPlants, setPlants, getSortBy, setSortBy } from '../storage-utils.js';

const test = QUnit.test;

test('getSortBy should retrieve an item in sessionStorage', (expect) => {
    const sortObject = 'Sorting method string';
    sessionStorage.setItem('SORTBY', JSON.stringify(sortObject));
    const actual = getSortBy();
    expect.deepEqual(actual, sortObject);
});

test('setSortBy should write an item to sessionStorage', (expect) => {
    sessionStorage.removeItem('SORTBY');
    
    const expected = 'Sorting method string';
    setSortBy(expected);
    
    const actualString = sessionStorage.getItem('SORTBY');
    const actual = JSON.parse(actualString);
    expect.deepEqual(actual, expected);
});

test('getPlants should return plant objects from local storage', (expect) => {
    const plantObject = {
        'id': 1,
        'img': './assets/plant-images/monstera-deliciosa.jpg',
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
    localStorage.setItem('PLANTS', JSON.stringify(plantObject));
    const actual = getPlants();
    expect.deepEqual(actual, plantObject);
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

test('findById should return item from plant-data array with matching id', (expect) => {
    const expected = {
        'id': 1,
        'img': '../assets/plant-images/monstera-deliciosa.jpg',
        'common-name': 'Swiss Cheese plant',
        'genus': 'Monstera  Deliciosa',
        'care-level': 3,
        'family': 'Aracea',
        'plant-type': 'Tropical, climbing evergreen',
        'mature-size': '3 ft. tall',
        'water': 'Regular waterings during growing season every one to two weeks. During fall and winter only water occasionally. It is important for the soil to dry out slightly between waterings. ',
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