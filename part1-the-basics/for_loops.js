for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 100; i >= 0; i-= 5) {
    console.log(i);
}

let l = [1, 2, 1, 2, 3]
for (let i of l) {
    console.log(i);
}

// older version of 'for of' is 'for in' - more common
for(let i in l) {
    console.log(l[i]);
}
/* loop variable 'i' is an index variable that is used to index
the original array. */

// iterate over a string
const t = "Hello World";
for (let c of t) {
    console.log(c);
}

// iterate over an array
var data = [3, 7, 2, 9, 1, 11];
var sum = 0;
data.forEach(function(d) {
    sum += d;
});
console.log(sum);
