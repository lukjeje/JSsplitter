function submit() {
    var money = document.getElementById("billin").value;
    var npeople = document.getElementById("billin2").value;
    var procent = document.getElementById("tipcum").value;
    var yo = money / npeople;
    var yoyo = (procent / yo) * 100;
    var final = yo + yoyo;
    document.getElementById("am2").innerHTML = "<b>$"+final.toFixed(2)+"</b>";
};

function myf(x) {
   var proce = document.getElementById("tipcum").value = x;
}