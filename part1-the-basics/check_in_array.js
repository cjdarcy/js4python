let mylist = [1, 2, 3, "foo", "bar"]
if (mylist.includes(3)) {
    console.log('yes, includes returns true')
}
// indexOf returns the location of item or -1 if not found
if (mylist.indexOf(3) > -1) {
    console.log('yes, index is > -1')
}

// BEWARE this does not work as expected
if (3 in mylist) {
    console.log('yes, 3 is in mylist')
}

// returns 'what??' because 'in' only works on the keys of an object (array)
if ("foo" in mylist) {
    console.log('yes, foo is in mylist')
} else {
    console.log("what?")
}
