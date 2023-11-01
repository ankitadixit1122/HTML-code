
// LOAD DATA FROM LOCAL STORAGE
selectData();
function manageData(){
    alert(1)

    var isComplete = document.getElementById('bookIsComplete');
    // IF TRUE, DATA IS GOING TO READ TABLE2
    if(isComplete.checked == true){
        let arr1 = getDataFromReadLocalStorage() ?? []
        let id = " " ;
        var item = {
        bookTitle : document.getElementById("bookTitle").value,
        bookAuthor:document.getElementById("bookAuthor").value,
        bookYear  :document.getElementById("bookYear").value 
        }
            if(id == " "){                                                                //TO ADD DATA IN LOCAL STORAGE CHECK DATA AVAILABLE OR NOT
                let arr1= getDataFromReadLocalStorage();
                if (arr1 == null){                                                         //CHECK DATA IS THERE OR NOT,
                    let data=[bookTitle,bookAuthor,bookYear];                              // IF DATA IS NULL(NO DATA IS THERE), PUT THE DATA IN LS
                    setDataToReadLocalStorage(data);
                }else{
                    arr1.push(item);                                                        //PUSH THE DATA IN EXISTING ARRAY
                    setDataToReadLocalStorage(arr1);
                }
            }else{
                let arr1= getDataFromReadLocalStorage();
                arr1[id]= bookTitle;
                setDataToReadLocalStorage(arr1);
            }
        document.getElementById('bookTitle').value='';
        document.getElementById('bookAuthor').value='';
        document.getElementById('bookYear').value='';
        //selectData();                                                                      // IT WILL BRING THE DATA

    }else{
        let arr = getDataFromLocalStorage() ?? []
        let id = " " ;
        var item = {
        bookTitle : document.getElementById("bookTitle").value,
        bookAuthor:document.getElementById("bookAuthor").value,
        bookYear  :document.getElementById("bookYear").value 
        }
            if(id == " "){                                                                  //TO ADD DATA IN LOCAL STORAGE CHECK DATA AVAILABLE OR NOT
                let arr= getDataFromLocalStorage();
                if (arr == null){                                                           //CHECK DATA IS THERE OR NOT,
                    let data=[bookTitle,bookAuthor,bookYear];                               // IF DATA IS NULL(NO DATA IS THERE), PUT THE DATA IN LS
                    setDataToLocalStorage(data);
                }else{
                    arr.push(item);                                                         //PUSH THE DATA IN EXISTING ARRAY
                    setDataToLocalStorage(arr);
                }
            }else{
                let arr= getDataFromLocalStorage();
                arr[id]= bookTitle;
                setDataToLocalStorage(arr);
            }
        document.getElementById('bookTitle').value='';
        document.getElementById('bookAuthor').value='';
        document.getElementById('bookYear').value='';
        } 
        selectData();
        document.getElementById('form').reset();
    }

//}
// DISPLAY DATA FROM UNREAD LOCAL STORAGE TO TABLE1
function selectData(){
    let arr = getDataFromLocalStorage() ?? []
    if(arr!==null){                                                                    // CHECK DATA IS THERE
        let tablerow= '' ;
        let sno = 1;
        arr.forEach((value,i) => {
            tablerow = tablerow+ `<tr>
                            <td>${sno}</td>
                            <td>${value.bookTitle}</td>
                            <td>${value.bookAuthor}</td>
                            <td>${value.bookYear}</td>
                            <td>
                                <button class ="btn btn-sm btn-warning ">
                                <i class="fa-solid fa-check"></i>
                                </button>
                            </td>
                            <td>
                                <button type ="button" class ="btn btn-sm btn-success" 
                                onclick= "editData(${sno})" >
                                <i class="fa-solid fa-pen-to-square"></i>
                                
                                </button>
                                </td>
                            <td>
                                <button type ="button" class ="btn btn-sm btn-danger" 
                                onclick= "deleteData(${i})">
                                <i class="fa-solid fa-trash">
                                </a>
                                </i>
                                </button>
                            </td>
                            </tr>`;
            sno++;
        }
        )
        document.getElementById('table1').innerHTML= tablerow;
    }
    let arr1 = getDataFromReadLocalStorage() ?? []
    if(arr1!==null){                                                                    // CHECK DATA IS THERE
        let tablerow= '' ;
        let sno = 1;
        arr1.forEach((value,i) => {
            tablerow = tablerow+ `<tr>
                            <td>${sno}</td>
                            <td>${value.bookTitle}</td>
                            <td>${value.bookAuthor}</td>
                            <td>${value.bookYear}</td>
                            <td>
                                <button class ="btn btn-sm btn-warning ">
                                <i class="fa-solid fa-check"></i>
                                </button>
                            </td>
                            <td>
                                <button type ="button" class ="btn btn-sm btn-success" 
                                onclick= "editData(${sno})" >
                                <i class="fa-solid fa-pen-to-square"></i>
                                
                                </button>
                                </td>
                            <td>
                                <button type ="button" class ="btn btn-sm btn-danger" 
                                onclick= "deleteReadData(${i})">
                                <i class="fa-solid fa-trash">
                                </a>
                                </i>
                                </button>
                            </td>
                            </tr>`;
            sno++;
        }
        )
        document.getElementById('table2').innerHTML= tablerow;
    }

}

//EDIT RECORD
function editData(recordId){
    alert('edit function')
    alert(recordId)
    id =recordId-1;
    let arr = getDataFromLocalStorage(id);
    console.log(arr)
    document.getElementById('bookTitle').value = arr[recordId];
    document.getElementById('bookAuthor').value = arr[recordId];
    document.getElementById('bookYear ').value = arr[recordId];
}

//DELETE RECORD
function deleteData(recordId){
    alert('delete Function')
    let arr = getDataFromLocalStorage();
    arr.splice(recordId,1);                    // re
    setDataToLocalStorage(arr);
    selectData();   
}

function deleteReadData(recordId){
    alert('delete Function')
    let arr = getDataFromReadLocalStorage();
    arr.splice(recordId,1);                    // re
    setDataToReadLocalStorage(arr);
    selectData();   
}

//GETTING DATA FROM UNREAD LOCALSTORAGE
function getDataFromLocalStorage(){
    alert("getdata from ls")
    let arr = JSON.parse(localStorage.getItem("DataLS"));
    return arr;
}

//SETTING DATA TO  UNREAD LOCALSTORAGE
function setDataToLocalStorage(arr){
    localStorage.setItem("DataLS",JSON.stringify(arr));
}

// GETTING DATA FROM READ LOCALSTORAGE
function getDataFromReadLocalStorage(){
    let arr1 = JSON.parse(localStorage.getItem("ReadDataLS"));
    return arr1;
}

//SETTING DATA TO  READ LOCALSTORAGE
function setDataToReadLocalStorage(arr1){
    localStorage.setItem("ReadDataLS",JSON.stringify(arr1));
}



















