const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]

const arr = []

const cities = [
    'Dublin',
    'Paris',
    'New York',
    'Copenhagen',
    'Berlin',
    'Madrid'
]

console.log(cities.length)
console.log(cities[0],cities[Math.round(cities.length / 2)-1],cities[cities.length-1])

const mixedDataTypes = [
    'HTML',
    'CSS',
    'Albania',
    'Bolivia',
    'Dublin',
    'Paris',
    'Lisbon'
]

const itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon',
]

console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0],itCompanies[Math.round(cities.length / 2)-1],itCompanies[cities.length-1])

// for (let i = 0; i < itCompanies.length; i++){
//     itCompanies[i] = itCompanies[i].toUpperCase()
// }

itCompanies.forEach((company,i) => {
    itCompanies[i] = company.toUpperCase()
})

console.log(itCompanies)

if (itCompanies.indexOf('APPLE') != -1){
    console.log(itCompanies.indexOf('APPLE') + 1)
} else {
    console.log('This company is not in the array')
}

console.log(itCompanies[0].split(""))

const result = itCompanies.filter(company => company.split("").indexOf('O') == -1)
console.log(result)

itCompanies.sort()
console.log(itCompanies)

itCompanies.reverse()
console.log(itCompanies)

console.log(itCompanies.slice(3))

console.log(itCompanies.slice(0,2))

console.log(itCompanies.slice())



