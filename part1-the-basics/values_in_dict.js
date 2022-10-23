const myDict = {foo: "bar", baz: 22, 33: 'hello'};
let vals = []
for (const key of Object.keys(myDict)) {
    vals.push(myDict[key])
}
console.log(vals)
