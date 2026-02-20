// Import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07; 
    
     expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One dollar should be 167.455 Yen", function() {
    const { fromDollarToYen } = require('./app.js');

    const dollars = fromDollarToYen(1.07);

    const expected = 1.07 * 156.5; 
    
    expect(fromDollarToYen(1.07)).toBe(167.455); 
})

test("One Yen should be 136.155 pounds", function() {
    const { fromYenToPound } = require('./app.js');

    const Yen = fromYenToPound(156.5);

    const expected = 156.5 * 0.87; 
    
     expect(fromYenToPound(156.5)).toBe(136.155); 
})