const myDict = {foo: "bar", baz: 22, 33: 'hello'};
const vals = Object.keys(myDict).map(key => myDict[key])
console.log(vals)
