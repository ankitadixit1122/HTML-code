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
