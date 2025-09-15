    let img =  document.getElementById("myImage")
    function showImage() {
        img.style.visibility = "visible";
    }
    let personalinfo = document.querySelector(".personalinfo");
    function showEducation() {
       personalinfo.style.visibility = "visible";
    }
let skills = document.querySelector(".skills");
function showSkills() {
    skills.style.visibility = "visible";
}

let formSubmit = document.getElementById("myForm");


function submitForm() {
    if (myForm === " ") {
        alert("Please enter your name and email");
    }else {
        alert("Form submitted successfully");
    }
     
 
}
