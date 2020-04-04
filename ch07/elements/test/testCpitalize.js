const assert = require('assert')
const radioGroup = require('./js/radio-group.js')

describe('capitalize', function() {
    it('should capitalize the first letter in `angular`', function() {
        const actual = radioGroup.capitalize('angular')
        assert.equal(actual, 'Angular')
    })
})