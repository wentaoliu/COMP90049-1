const log = console.log
const data =  require('./data')
const method = require('./method')
const dictionary = data.dictionary
const misspelledWords = data.misspell
const correctWords = data.correct

const supportedMethods = ['levenshtein', 'bigram']
const args = process.argv.slice(2)
const primaryMethodName = args[0]
const secondaryMethodName = args[1]

let candidateNum = 1
let useSecondaryMethod = false

if(parseInt(args[1]) !== NaN) {
    candidateNum = parseInt(args[1])
}

if(primaryMethodName == null) {
    log("No method is given") 
    process.exit()
}

if(method[primaryMethodName] == null) {
    log('Unsupported method: ' + primaryMethodName)
    process.exit()
}

const primaryMethodFunc = method[primaryMethodName]
const secondaryMethodFunc = method[secondaryMethodName]

if(secondaryMethodName != null && secondaryMethodFunc != null) {
    useSecondaryMethod = true
}

let headwordCount = 0
let correctCount = 0
let candidateCount = 0

log('Using ' + primaryMethodName + ' method')
if(useSecondaryMethod) {
    log('(If there is a tie, use ' + secondaryMethodName + ' method)')
}
log('Start...')
log('  |      Misspell      |               Response               | Dist |   Should be')
log('-------------------------------------------------------------------------------------------------')

misspelledWords.forEach((misspelled, i) => {
    if(misspelled == '') return

    headwordCount ++

    let candidates = []
    let response = []
    let minPrimaryDist = Infinity
    let minSecondaryDist = Infinity

    dictionary.forEach(word => {
        let distance = primaryMethodFunc(misspelled, word)
        if(distance < minPrimaryDist) {
            minPrimaryDist = distance
            candidates = [word]
        } else if (distance == minPrimaryDist) {
            candidates.push(word)
        }
    })

    if(useSecondaryMethod) {
        if(candidates.length > 1) {
            candidates.forEach(candidate => {
                let distance = secondaryMethodFunc(misspelled, candidate)
                if(distance < minSecondaryDist) {
                    minSecondaryDist = distance
                    response[0] = candidate
                }
            })
        } else {
            response[0] = candidates[0]
        }
    } else {
        response = candidates.slice(0, candidateNum)
    }

    if(response.includes(correctWords[i])) {
        log('v | ' + misspelled.padEnd(18) + " | " + response.join(',').padEnd(36) + ' | ' + minPrimaryDist.toString().padEnd(4) + ' | ' + correctWords[i])
        correctCount ++      
    } else {
        log('x | ' + misspelled.padEnd(18) + " | " + response.join(',').padEnd(36) + ' | ' + minPrimaryDist.toString().padEnd(4) + ' | ' + correctWords[i])
    }
    candidateCount += response.length
})

log('-------------------------------------------------------------------------------------------------')
log(headwordCount + ' headwords, ' + correctCount + ' correct.')
log('Overall Accurary : ' + (correctCount / headwordCount).toFixed(4))
if(candidateNum > 1) {
    log('Average Precision : ' + (correctCount / candidateCount).toFixed(4))
}


   



