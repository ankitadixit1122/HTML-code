function change(){
    
    let firstnum = parseInt(document.getElementById("num1").value);
    let secondnum= parseInt(document.getElementById("num2").value);
    let result = firstnum+secondnum;
    let result1 = firstnum-secondnum;
    let result2 = firstnum*secondnum;
    let result3 = firstnum/secondnum;

    document.getElementById("div1").innerHTML = "Addition = " + result;
    document.getElementById("div2").innerHTML = "Substraction = " + result1;
    document.getElementById("div3").innerHTML = "Multiplication = "+ result2;
    document.getElementById("div4").innerHTML = "Division = " +result3;

}