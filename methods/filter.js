import isArray from '../helpers/isArray.js'

// Iterates over elements of collection, returning an array of all elements predicate returns truthy for.
// The predicate is invoked with three arguments: (value, index|key, collection).

/*
const users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
];

1) _.filter(users, function (o) { return !o.active; }); // => objects for ['fred']
2) _.filter(users, ['active', false]);                  // => objects for ['fred']
3) _.filter(users, { 'age': 36, 'active': true });      // => objects for ['barney']
4) _.filter(users, 'active');                           // => objects for ['barney']
*/

function filter(array, predicate) {
    if ( !isArray(array) && typeof predicate !== 'function' ) return []

    // case 1
    if ( typeof predicate === 'function' ) {
        if (!isArray(array) && typeof array === 'object') {
            return predicate(array) ? Object.values(array) : []
        }
        if (typeof array === 'string') {
            array = array.split('')
        }
        return array.filter((el, i, array) => {
            return predicate(el, i, array)
        })
    }

    // case 2
    if ( isArray(predicate) ) {
        return array.filter(el => {
            if (typeof el === 'object') {
                return Object.entries(el).some(([ key, value ]) => key === predicate[0] && value === predicate[1])
            }
        })
    }

    //  case 3
    if ( typeof predicate === 'object' && null !== predicate ) {
        return array.filter(el => {
            for (let key in el) {
                if (predicate[key] !== undefined && predicate[key] !== el[key]) {
                    return false
                }
            }
            return true
        })
    }

    // case 4
    if ( typeof predicate === 'string' ) {
        return array.filter(el => {
            if (typeof el !== 'object' || el === null) return false
            return el[predicate]
        })
    }
}

export default filter
