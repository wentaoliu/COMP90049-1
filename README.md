# COMP90049 Project 1 

## Environment

* OS: any
* Node.js > 8.2

## Setup

* run `npm install` to install dependencies.

## Usage

* `npm start <primary method> [<secondary method> | <candidates number>]`

    `<primary method>` is mandatory, while `<secondary method>` is optional.

    If `<secondary method>` is given, when there is a tie using the primary method, the secondary method will be used to sort all possible candidates.

    `<candidates number>` is the maximum number of candidates returned for each token. 

* Supported method names: `levenshtein`, `bigram`.

* Examples: 
    
    `npm start 1 levenshtein bigram`

    `npm start 3 bigram levenshtein`

    `npm start 3 levenshtein`

    `npm start 1 bigram`
 
## Author

Wentao Liu