function uniq(arr) {
    if (!Array.isArray(arr)) return undefined

    const uniqArr = []

    return arr.filter(el => {
        if (!uniqArr.includes(el)) {
            uniqArr.push(el)
            return el
        }
    })
}
