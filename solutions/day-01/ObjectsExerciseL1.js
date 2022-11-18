const dog = {
    name: 'cookie',
    legs: 4,
    color: 'black',
    bark: function () {
        return `woof woof`
    },
}

console.log(dog.bark())
console.log(dog.name)
console.log(dog)

dog.breed = 'labrador'

console.log(dog)