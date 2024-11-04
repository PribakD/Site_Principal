function resultat() {
    var a = document.getElementById("t2").value;
    var b = document.getElementById("t3").value;
    var c = document.getElementById("t5").value;
    var d = document.getElementById("t6").value;
    var e = document.getElementById("t8").value;
    var f = document.getElementById("t9").value;
    var g = document.getElementById("t2").value;
    var h = document.getElementById("t2").value;
    t4.value = Number(a)*Number(b);
    t7.value = Number(c)*Number(d);
    t10.value = Number(e)*Number(f);
    var i = document.getElementById("t4").value;
    var j = document.getElementById("t7").value;
    var k = document.getElementById("t10").value
    t11.value = Number(i)+Number(j)+Number(k);
}

function reinitialise(){
    t1.value = null;
    t2.value = null;
    t3.value = null;
    t4.value = null;
    t5.value = null;
    t6.value = null;
    t7.value = null;
    t8.value = null;
    t9.value = null;
    t10.value = null;
    t11.value = null;
    t12.value = null;
    t13.value = null;
}