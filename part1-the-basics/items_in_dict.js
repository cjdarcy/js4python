const myDict = {foo: "bar", baz: 22, 33: 'hello'};
for (const key of Object.keys(myDict)) {
    val = myDict[key]
    //or
    myDict[key] || val // if val is already defined
    console.log(key)
    console.log(val)
    // do something with key and val
}
