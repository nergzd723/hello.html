function calc(){
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let n = parseFloat(n1) + parseFloat(n2)
    document.getElementById("output").innerHTML = n
}