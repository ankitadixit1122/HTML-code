
class Employee {
    constructor(firstname,lastname, design, workhrs,joiningDate,empid,sal) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.design = design;
    this.workhrs = workhrs;
    this.joiningDate=joiningDate;
    this.empid = empid;
    this.sal=sal;
    }

}

function validateEmployee()
{
    
    let firstname=document.getElementById("firstname").value;
    let lastname=document.getElementById("lastname").value;
    let design=document.getElementById("design").value;
    let workhrs=document.getElementById("workhrs").value;
    let joiningDate=document.getElementById("joiningDate").value;
    let empid=document.getElementById("empid").value;
    let sal;

    alert(firstname)

    if (design === "Manager" ){
        sal= 90*workhrs;
    }
    else if (design === "Contractor"){
        sal= 80*workhrs;
    }  
    else if (design === "Trainee"){
        sal= 50*workhrs;
        //str += this.firstname + " who is a "+ this.design + "will get $"+ sal
    } 

    let newEmployee = new Employee(firstname,lastname,design,workhrs,joiningDate,empid,sal);
   
    alert("Data Send")
    localStorage.setItem("Result",JSON.stringify(newEmployee));

}


    



