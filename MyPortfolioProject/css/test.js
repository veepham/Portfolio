window.addEventListener('DOMContentLoaded', ()=> {
    document.body.classList.remove('fade-out');
});

function validateForm(){
    let x = document.forms['myForm']["fname"].value;
    if (x == "") {
        alert("Name must be filled out!");
        return false;
    }
}

function openForm(){
    document.getElementById("myForm").style.display = "block";
}
function closeForm(){
    document.getElementById("myForm").style.display = "none";
}