var v = 1;
function fun1() {
    console.log(v);
}

function fun2() {
    var v = 2;
    fun1();
};

fun2();
