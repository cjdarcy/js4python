"use strict"
let main = function() {
    let count = new Array(10).fill(0); //ArrayList
    let data = '9,8,4,3,5,5,1,1,5,8,9,7,7,7,6'

    for (let num of data.split(',')) {
        const idx = parseInt(num);
        count[idx] = count[idx] + 1
    }

    for(let num in count) {
        console.log(num + " occured " + count[num] + " times.")
    }
}

main()
