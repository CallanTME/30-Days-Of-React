const fullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}

console.log(fullName('Callan', 'Egan'))

function addNumbers(num1, num2){
    return num1 + num2
}

console.log(addNumbers(1,2))

const convertCelsiusToFahrenheit = (tempCelcius) => {
    return tempCelcius * (9 / 5) + 32
}

console.log(convertCelsiusToFahrenheit(37.5))

function showDateTime(){
    return Date()
}

console.log(showDateTime())

// const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']
// countries.forEach(function (country, index) {
//   console.log(index, country.toUpperCase())
// })

const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']
const newCountries = countries.map((country) => country.toUpperCase())

console.log(newCountries) // ["FINLAND", "ESTONIA", "SWEDEN", "NORWAY"]
