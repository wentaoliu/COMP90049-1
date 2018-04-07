# COMP90049 Project 1 

## Environment

* OS: any
* Node.js > 8.2

## Setup

* run `npm install` to install dependencies.

## Usage

* `npm start <primary method> <secondary method>`

    `<primary method>` is mandatory, while `<secondary method>` is optional.

    If `<secondary method>` is given, when there is a tie using the primary method, the secondary method will be used to sort all possible candidates.

* Supported method names: `levenshtein`, `bigram`.

* Examples: 
    
    `npm start levenshtein bigram`

    `npm start bigram levenshtein`

    `npm start levenshtein`

    `npm start bigram`
 
## Author

Wentao Liu