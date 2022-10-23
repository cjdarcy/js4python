"use strict";

const fs = require('fs');

main()

function main() {

    const data = fs.readFile('alice30.txt', 'utf8', (err, data) => {
    if (err) {
    console.error(err);
    return;
    }
    let count = {}

    for (let word of data.split(/\s/)) {
        word = word.toLowerCase();
        count[word] = (count[word] || 0) + 1
    }

    for (let key of Object.keys(count)) {
        console.log(key + ": " + count[key])
    }
    });
}
