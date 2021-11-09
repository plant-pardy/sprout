import plants from '../plant-data.js';
import { renderPlant } from '../pick-plant/render-plant.js';
import { renderInfo } from '../plant-info/render-plant-info.js';

const test = QUnit.test;

test('renderPlant should return an HTML snippet', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const expected = `<div class="plant-card"><label name="click-card"><h2>Swiss Cheese plant</h2><input name="click-card" type="checkbox" id="1" class="add-check hidden"><img src="../assets/plant-images/monstera-deliciosa.jpg"><h3>Care level: easy</h3></label></div>`;

    const SwissCheesePlant = plants[0];
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPlant(SwissCheesePlant).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('renderInfo should return an HTML snippet', (expect) => {
    const expected = `<div class="plant-card"><h2>Swiss Cheese plant</h2><img src="../assets/plant-images/monstera-deliciosa.jpg"><table><tr><th>genus</th><td>Monstera  Deliciosa</td></tr><tr><th>care-level</th><td>3</td></tr><tr><th>family</th><td>Aracea</td></tr><tr><th>plant-type</th><td>Tropical, climbing evergreen</td></tr><tr><th>mature-size</th><td>3 ft. tall</td></tr><tr><th>water</th><td>Regular waterings during growing season every one to two weeks. During fall and winter only water occasionally. It is important for the soil to dry out slightly between waterings. </td></tr><tr><th>sun-exposure</th><td>Bright indirect sunlight, partial shade</td></tr><tr><th>soil-type</th><td>Peat based potting soil, well-drained</td></tr><tr><th>soil-pH</th><td>Acidic or neutral</td></tr><tr><th>growing-season</th><td>Mid-summer</td></tr><tr><th>native-area</th><td>Central America</td></tr><tr><th>propagation</th><td>Yes</td></tr><tr><th>toxicity</th><td>Toxic to cats and dogs.</td></tr></table></div>`;  
    const actual = renderInfo(plants[0]).outerHTML;

    expect.deepEqual(actual, expected);
});



