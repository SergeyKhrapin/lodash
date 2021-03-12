import uniq from './methods/uniq.js'
import without from './methods/without.js'

function initLodash() {
    return {
        uniq,
        without
    }
}

const _ = initLodash()

window._ = _
