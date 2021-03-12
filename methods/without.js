// Creates an array excluding all given values

function without(array, ...values) {
    if (!Array.isArray(array)) return []

    return array.filter(el => !values.includes(el))
}

export default without
