/*
    Author Nish Patel
*/
var loaderUtils = require("loader-utils")

module.exports = function () {}
module.exports.pitch = function (remainingRequest) {
    this.cacheable && this.cacheable()
    var query = loaderUtils.parseQuery(this.query)
    var moduleRequest = remainingRequest
    var source = require(remainingRequest, query)
    var value = typeof source === "string" ? JSON.parse(source) : source

    var str = [
        'var Immutable = require("' + require.resolve('seamless-immutable') + '")',
        "module.exports = Immutable(" + JSON.stringify(value, undefined, "\t") + ");"
    ].join('\n')
    return str
}
