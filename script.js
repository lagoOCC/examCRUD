var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["FirstName"] = document.getElementById("FirstName").value;
    formData["MiddleName"] = document.getElementById("MiddleName").value;
    formData["LastName"] = document.getElementById("LastName").value;
    formData["Age"] = document.getElementById("Age").value;
    formData["Gender"] = document.getElementById("Gender").value;
    formData["Birthday"] = document.getElementById("Birthday").value;
    formData["Course"] = document.getElementById("Course").value;
    formData["SchoolYear"] = document.getElementById("SchoolYear").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.FirstName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.MiddleName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.LastName;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Age;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.Gender;
    cell4 = newRow.insertCell(5);
    cell4.innerHTML = data.Birthday;
    cell4 = newRow.insertCell(6);
    cell4.innerHTML = data.Course;
    cell4 = newRow.insertCell(7);
    cell4.innerHTML = data.SchoolYear;
    cell4 = newRow.insertCell(8);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("FirstName").value = "";
    document.getElementById("MiddleName").value = "";
    document.getElementById("LastName").value = "";
    document.getElementById("Age").value = "";
    document.getElementById("Gender").value = "";
    document.getElementById("Birthday").value = "";
    document.getElementById("Course").value = "";
    document.getElementById("SchoolYear").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("FirstName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("MiddleName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("LastName").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Age").value = selectedRow.cells[4].innerHTML;
    document.getElementById("Gender").value = selectedRow.cells[5].innerHTML;
    document.getElementById("Birthday").value = selectedRow.cells[6].innerHTML;
    document.getElementById("Course").value = selectedRow.cells[7].innerHTML;
    document.getElementById("SchoolYear").value = selectedRow.cells[8].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.FirstName;
    selectedRow.cells[1].innerHTML = formData.MiddleName;
    selectedRow.cells[2].innerHTML = formData.LastName;
    selectedRow.cells[3].innerHTML = formData.Age;
    selectedRow.cells[4].innerHTML = formData.Gender;
    selectedRow.cells[5].innerHTML = formData.Birthday;
    selectedRow.cells[6].innerHTML = formData.Course;
    selectedRow.cells[7].innerHTML = formData.SchoolYear;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("FirstName").value == "") {
        isValid = false;
        document.getElementById("FirstNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("FirstNameValidationError").classList.contains("hide"))
            document.getElementById("FirstNameValidationError").classList.add("hide");
    }
    return isValid;
}