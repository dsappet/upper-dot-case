/* global describe, it */
var assert = require('assert');
var upperDotCase = require('./');

describe('dot case', function () {
  it('should dot case a single word', function () {
    assert.equal(upperDotCase('test'), 'Test');
    assert.equal(upperDotCase('TEST'), 'Test');
  })

  it('should dot case regular sentence cased strings', function () {
    assert.equal(upperDotCase('test string'), 'Test.String');
    assert.equal(upperDotCase('Test String'), 'Test.String');
  })

  it('should dot case non-alphanumeric separators', function () {
    assert.equal(upperDotCase('dot.case'), 'Dot.Case');
    assert.equal(upperDotCase('path/case'), 'Path.Case');
  })

  it('should dot case dot cased strings', function () {
    assert.equal(upperDotCase('TestString'), 'Test.String')
    assert.equal(upperDotCase('TestString1_2_3'), 'Test.String1.2.3');
    assert.equal(upperDotCase('TestString_1_2_3'), 'Test.String.1.2.3');
  })

  it('should support non-latin characters', function () {
    assert.equal(upperDotCase('My Entrée'), 'My.Entrée');
  })

  it('should support locales', function () {
    assert.equal(upperDotCase('MY STRING', 'tr'), 'My.Strıng');
  })
    
    it('dot edge cases', function (done) {
        try{
    assert.equal(upperDotCase('.MY STRING'), 'My.String');
        assert.equal(upperDotCase('MY STRING.'), 'My.String');
        }catch(e){
            done(e);
        }
  })
    
})
