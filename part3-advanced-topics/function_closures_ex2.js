var z = 2;
function container() {
    let x = 3

    function inner1() {
        console.log(x, y, z)
    }

    let y = 4
    z = 9

    function inner2() {
        z = x + y
        console.log(x,y,z)
    }

    return {inner1, inner2}
}

let {inner1, inner2} = container()
inner2()
inner1()
