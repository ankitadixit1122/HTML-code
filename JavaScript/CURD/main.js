function save(){
    // this function saves the form page into local storage and calls the showAll() function 
}




function showAll(){
    alert(1)
    var table1 = document.getElementById('table1')
    table1.innerHTML= `
    <tr>
        <td>101</td>
        <td>Alice in the wonderland</td>
        <td>Anonymous</td>
        <td>1990</td>
        <td>
            <button class ="btn btn-sm btn-warning"><i class="fa-solid fa-check"></i></button>
        </td>
        <td>
            <button class ="btn btn-sm btn-success"><i class="fa-solid fa-pen-to-square"></i></button>
        </td>
        <td>
            <button class ="btn btn-sm btn-danger"><i class="fa-solid fa-trash"></i></button>
        </td>
    </tr>
    `
}