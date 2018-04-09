# COMP90049 Project 1 

## Environment

* OS: any
* Node.js > 8.2

## Setup

* run `npm install` to install dependencies.

## Dependencies

* edit-distance : https://www.npmjs.com/package/edit-distance
* n-gram : https://www.npmjs.com/package/n-gram

## Usage

* `npm start <primary method> [<secondary method> | <candidates number>]`

    `<primary method>` is mandatory, while `<secondary method>` is optional.

    If `<secondary method>` is given, when there is a tie using the primary method, the secondary method will be used to sort all remaining candidates.

    `<candidates number>` is the maximum number of candidates returned for each headword (default 1). 

* Supported method names: 
    
    * `levenshtein` : Levenshtein distance
    * `bigram` : 2-gram distance
    * `trigram` : 3-gram distance
    * `random` : return a random distance
    * `cpd` : custom parameter distance

* Examples: 
    
    `npm start levenshtein bigram`

    `npm start bigram levenshtein`

    `npm start levenshtein 3`

    `npm start bigram 5`
 
* Writing the result to a file instead of console

    `npm start [arguments] > result.log`

## Author

Wentao Liu