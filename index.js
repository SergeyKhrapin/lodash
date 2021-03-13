import uniq from './methods/uniq.js'
import without from './methods/without.js'
import filter from './methods/filter.js'

function initLodash() {
    return {
        uniq,
        without,
        filter
    }
}

const _ = initLodash()

window._ = _
