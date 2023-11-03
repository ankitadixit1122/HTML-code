function  getData(){
fetch("https://gorest.co.in/public/v2/users").then((data)=>{
    console.log(data); // data in jason formate

    return data.json();  // converted into object

}).then((objectData)=>{     //obejct is stored here
    //console.log(objectData[0].id);
        let tableData ="";
        objectData.map((values)=>{
        tableData+=` <tr>
                        <td>${values.id}</td>
                        <td>${values.name}k</td>
                        <td>${values.email}</td>
                        <td>${values.status}</td>
                    </tr>`;
    });
    document.getElementById("tableBody").innerHTML=tableData;
}).catch((err)=>{
    console.log(err)
})  
}



/*

function getData(){
    $.ajax({
        url:'https://gorest.co.in/public/v2/users',
        dataType:'json',
        type:'GET',
        data:{
            key:'value'
        },
    success:data=>{
        console.log(data)
        if (data.length > 0) {
        var temp = "";
        data.forEach((itemData) => {
        temp += "<tr>";
        temp += "<td>" + itemData.id + "</td>";//getting from json (id,name...)
        temp += "<td>" + itemData.name + "</td>";
        temp += "<td>" + itemData.gender + "</td>";
        temp += "<td>" + itemData.email + "</td>";
        temp += "<td>" + itemData.status + "</td>";
    });
        //document.getElementById('data').innerHTML = temp;
        $(document).ready(function(){
        $("#data").html(temp)
        })
        }   
    },
    error:err=>{
        console.log(err)
        }
    })
}

*/
