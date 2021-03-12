import uniq from './uniq.js'
import without from './without.js'

function initLodash() {
    return {
        uniq,
        without
    }
}

const _ = initLodash()

window._ = _
