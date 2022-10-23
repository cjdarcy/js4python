let l1 = "the quick brown fox jumps over".split(/\s/);
console.log(l1)
let l2 = Array.from("the quick brown fox jumps over")
console.log(l2)
// Join works similarly, but the sparator is the argument not the list
console.log(l1.join(":"))
