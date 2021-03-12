import uniq from './uniq.js'

function initLodash() {
    return {
        uniq
    }
}

const _ = initLodash()

window._ = _
