let res =localStorage.getItem(("Result"))
let res1=JSON.parse(res)
document.getElementById("div1").innerHTML = res1.firstname + " who is a "+ res1.design + "will get $"+ res1.validateEmployee()


//document.getElementById("div1").innerHTML = res.firstname +" "+res.lastname

//const res = localStorage.getItem("Result");
//console.log("data: ", JSON.parse(res));
