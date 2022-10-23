"use strict"
var myArr = document.getElementsByTagName("p")

/* does not work in Node.js. also:
getElementsByName()
getElementsByClass()
getElementById()
*/

// this will find the innerHTML of all the 'p' tags on a page.
for (var p of myArr) {
    writeln(p.toString() + p.innerHTML)
i}

/*also, for adding nodes to a DOM tree:
createElement()
createAttribute()
appendChild()
insertBefore()
*/
