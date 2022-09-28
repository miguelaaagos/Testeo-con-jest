// this is my function that sums two numbers
const sum = (a, b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7, 3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToYen = function(valueInEuro){
    let valueInYen = valueInEuro * 127.9;
    return valueInYen;
}


// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromEuroToPound = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInPounds = valueInEuro * 0.8;
    //return the dollar value
    return valueInPounds;
}

// Se exportan todas las funciones al test.
module.exports = { sum, fromEuroToDollar, fromEuroToYen, fromEuroToPound };