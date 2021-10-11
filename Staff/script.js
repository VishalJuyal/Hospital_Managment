
var table = document.getElementById("table"),rIndex;
            
for(var i = 1; i < table.rows.length; i++){
    table.rows[i].onclick = function(){
        rIndex = this.rowIndex;
        console.log(rIndex);

        document.getElementById("ID").value = this.cells[1].innerHTML;
        document.getElementById("Patient name").value = this.cells[2].innerHTML;
        document.getElementById("Problem").value = this.cells[3].innerHTML;
        document.getElementById("Doctor").value = this.cells[3].innerHTML;
        document.getElementById("Phone").value = this.cells[4].innerHTML;
    };
}

            
// edit the row
function editRow(){
    table.rows[rIndex].cells[1].innerHTML = document.getElementById("ID").value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById("Patient name").value;
    table.rows[rIndex].cells[3].innerHTML = document.getElementById("Problem").value;
    table.rows[rIndex].cells[4].innerHTML = document.getElementById("Doctor").value;
    table.rows[rIndex].cells[4].innerHTML = document.getElementById("Phone").value;
}

// Data Update Table Here
function editTableDisplay(){
    document.querySelector('.editTable').setAttribute('style', 'display: block;')
}
