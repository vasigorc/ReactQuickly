const assert = require('assert')

function capitalize(word) {
    if (typeof word != 'string') return ''
    return word.charAt(0).toUpperCase() + word.slice(1)
}

describe('capitalize', function() {
    it('should capitalize the first letter in `angular`', function() {
        const actual = capitalize('angular')
        assert.equal(actual, 'Angular')
    })
})