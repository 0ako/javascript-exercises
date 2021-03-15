// attempt 2:
let findTheOldest = function(array) {
    return array.reduce((oldest, current) => {
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        return currentAge > oldestAge ? current : oldest;
    })
}

let getAge = function(birth, death) {
    if(!death) death = new Date().getFullYear()
    return death - birth; 
}

// copied out: 
    return array.reduce((oldestPerson, currentPerson) =>   { // we operate on these 2 params
        let oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath) // use getAge helper function
        let currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)  // ditto
        return oldestAge < currentAge ? currentPerson : oldestPerson // use ternary to get the oldestPerson
    })
}

let getAge = function(birthYear, deathYear) {
    if (!deathYear) deathYear = new Date().getFullYear() // if deathYear is falsy, use today's date
    return deathYear - birthYear
}

module.exports = findTheOldest
