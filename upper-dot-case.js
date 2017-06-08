var noCase = require('no-case')

/**
 * Dot case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  var str = noCase(value, locale, '.');
    if(!str) return str;
    //Capitalize first letter
    str = str[0].toUpperCase() + str.slice(1);
    for(var i=0; i<str.length; i++){
        if(str[i] === '.'){ // found a dot
            if(str[i+1]){ // next character exists
                str = str.slice(0,i+1) + str[i+1].toUpperCase() + str.slice(i+ 2);
            }
        }
    }
    return str;
}
