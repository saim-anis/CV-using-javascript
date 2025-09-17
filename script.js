    let img =  document.getElementById("myImage")
    function showImage() {
        if(img.style.visibility === "hidden") {

            img.style.visibility = "visible";
            return;
        }
        else {
            img.style.visibility = "hidden";
        }
    }

// function toggleImage() {
//       let img = document.getElementById("myImage");
      
//       if (img.style.display === "none") {
//         img.style.display = "block";   // show image
//       } else {
//         img.style.display = "none";    // hide image
//       }
//     }


    let personalinfo = document.querySelector(".personalinfo");
    function showEducation() {
        if(personalinfo.style.visibility === "hidden") {

            personalinfo.style.visibility = "visible";
            return;
        }
        else {
            personalinfo.style.visibility = "hidden";
        }
    }
let skills = document.querySelector(".skills");
function showSkills() {
        if(skills.style.visibility === "hidden") {

            skills.style.visibility = "visible";
            return;
        }
        else {
            skills.style.visibility = "hidden";
        }
    }

let formSubmit = document.getElementById("myForm");


function submitForm() {
    if (myForm === " ") {
        alert("Please enter your name and email");
    }else {
        alert("Form submitted successfully");
    }
     
 
}
