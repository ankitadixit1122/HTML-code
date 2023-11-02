let res =localStorage.getItem(("Result"))
let res1=JSON.parse(res)
document.getElementById("div1").innerHTML = res1.firstname + " who is a "+ res1.design + "will get $"+ res1.sal


$(document).ready(function(){

    $("#div1").html("Hello   "+ res1.firstname+"   You are a designation is    "+res1.design+ "  and your hourly salary is $  "+res1.sal)
}
)



