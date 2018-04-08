const ed = require('edit-distance')
const ngram = require('n-gram')

function levenshteinDistance (stringA, stringB) {
    const insert = remove = function(node) { return 1 }
    const update = function(stringA, stringB) { return stringA !== stringB ? 1 : 0 }
    
    const res = ed.levenshtein(stringA, stringB, insert, remove, update)
    return res.distance
}

function ngramDistance (n, stringA, stringB) {
    let gramsA = ngram(n)('#' + stringA + '#')
    let gramsB = ngram(n)('#' + stringB + '#')
    let gA = gramsA.length 
    let gB = gramsB.length
    let same = 0
    gramsA.forEach(a => {
        gramsB.forEach((b, i) => {
            if(a == b) {
                same ++ 
                gramsB.splice(i, 1)
            }
        })
    })
    return gA + gB - 2 * same
}

function bigramDistance (stringA, stringB) {
    return ngramDistance(2, stringA, stringB)
}

function trigramDistance (stringA, stringB) {
    return ngramDistance(2, stringA, stringB)
}

module.exports = {
    levenshtein: levenshteinDistance,
    bigram: bigramDistance,
    trigram: trigramDistance
}