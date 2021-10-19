// popup contact form

//validation all fields
function input_fields() {
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
        alert("Completa all fields");
    } else {
        document.getElementById('form').submit();
        alert("message sent succesfully...");

    }
}

//display contact form
function show_form() {
    document.getElementById('MessageBox').style.display = "block";

}
//display contact form
function close_form() {
    document.getElementById('MessageBox').style.display = "none";
}