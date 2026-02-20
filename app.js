// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

const fromDollarToYen = (dollar) =>{
    let valueInYen = dollar * 156.5;
    return valueInYen;
}

const fromEuroToDollar = (Euro) => {
    let valueInDollar = Euro * 1.07;
    return valueInDollar;
}

const fromYenToPound = (Yen) => {
    let valueInPound = Yen * 0.87;
    return valueInPound;
} 

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum , fromEuroToDollar, fromDollarToYen, fromYenToPound };