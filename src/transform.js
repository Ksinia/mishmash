function groupAdultsByAgeRange(arr) {
    return arr.filter(person => person.age >= 18)
        .reduce((obj, person) => {
            if (person.age <= 20) {
                if (!('20 and younger' in obj)) {
                    obj['20 and younger'] = []
                }
                obj['20 and younger'].push(person)
            }
            else if (person.age <= 30) {
                if (!('21-30' in obj)) {
                    obj['21-30'] = []
                }
                obj['21-30'].push(person)
            }
            else if (person.age <= 40) {
                if (!('31-40' in obj)) {
                    obj['31-40'] = []
                }
                obj['31-40'].push(person)
            }
            else if (person.age <= 50) {
                if (!('41-50' in obj)) {
                    obj['41-50'] = []
                }
                obj['41-50'].push(person)
            }
            else {
                if (!('51 and older' in obj)) {
                    obj['51 and older'] = []
                }
                obj['51 and older'].push(person)
            }
            return obj
        }, {})

}

module.exports = { groupAdultsByAgeRange }