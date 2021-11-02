// IMPORT MODULES under test here:
import { renderPlant } from '../render-plant.js';
import plants from '../plant-data.js';
// import { example } from '../example.js';

const test = QUnit.test;


test('renderPlant should return an HTML snippet', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="plant-card"><h2>Swiss Cheese plant</h2><h2>Care level: 3</h2><input type="checkbox" id="1" class="add-check"><img src="undefined"></div>`;
    const SwissCheesePlant = plants[0];
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPlant(SwissCheesePlant).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});