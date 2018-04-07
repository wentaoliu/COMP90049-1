const fs = require('fs')
const os = require('os')

const eol = os.EOL
const dir = os.platform() == 'win32' ? 'win' : 'posix'

const dictionary = fs.readFileSync(`${dir}/dictionary.txt`).toString().split(eol)
const misspelledWords = fs.readFileSync(`${dir}/misspell.txt`).toString().split(eol)
const correctWords = fs.readFileSync(`${dir}/correct.txt`).toString().split(eol)

module.exports = {
    dictionary: dictionary,
    misspell: misspelledWords,
    correct: correctWords
}