//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)
//! Temperature Data
const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;

//! Conversion Functions
function convertFtoC(tempInFahrenheit) {
    return (tempInFahrenheit - 32) * 5 / 9;
}

function convertCtoF(tempInCelsius) {
    return (tempInCelsius * 9 / 5) + 32;
}

//! Calculate Totals
const tot_temperature_in_fahrenheit =
    day1TempF + day3TempF + day5TempF + day7TempF + day9TempF +
    day11TempF + day13TempF + day15TempF + day17TempF + day19TempF +
    day21TempF + day23TempF + day25TempF + day27TempF + day29TempF +
    convertCtoF(day2TempC) + convertCtoF(day4TempC) + convertCtoF(day6TempC) +
    convertCtoF(day8TempC) + convertCtoF(day10TempC) + convertCtoF(day12TempC) +
    convertCtoF(day14TempC) + convertCtoF(day16TempC) + convertCtoF(day18TempC) +
    convertCtoF(day20TempC) + convertCtoF(day22TempC) + convertCtoF(day24TempC) +
    convertCtoF(day26TempC) + convertCtoF(day28TempC) + convertCtoF(day30TempC);

const tot_temperature_in_celsius =
    day2TempC + day4TempC + day6TempC + day8TempC + day10TempC +
    day12TempC + day14TempC + day16TempC + day18TempC + day20TempC +
    day22TempC + day24TempC + day26TempC + day28TempC + day30TempC +
    convertFtoC(day1TempF) + convertFtoC(day3TempF) + convertFtoC(day5TempF) +
    convertFtoC(day7TempF) + convertFtoC(day9TempF) + convertFtoC(day11TempF) +
    convertFtoC(day13TempF) + convertFtoC(day15TempF) + convertFtoC(day17TempF) +
    convertFtoC(day19TempF) + convertFtoC(day21TempF) + convertFtoC(day23TempF) +
    convertFtoC(day25TempF) + convertFtoC(day27TempF) + convertFtoC(day29TempF);

//! Calculate Averages
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

//! Export for Tests
module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};

// Optional: Inspect results in console
// console.log({ tot_temperature_in_fahrenheit, tot_temperature_in_celsius, avg_temperature_in_fahrenheit, avg_temperature_in_celsius });

