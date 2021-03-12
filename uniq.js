export function uniq(array) {
    if (!Array.isArray(array)) return undefined

    const uniqArray = []

    return array.filter(el => {
        if (!uniqArray.includes(el)) {
            uniqArray.push(el)
            return el
        }
    })
}

export default uniq
