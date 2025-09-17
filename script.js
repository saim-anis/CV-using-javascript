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

function submitForm(event) {
 event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const successMessage = document.getElementById("successMessage");

  

  if (name === "") {
    alert("Please enter your name!");
  } else if (email === "") {
   alert("Please enter your email!");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
     alert("Please enter a valid email!");
  } else {
    successMessage.textContent = "✅ Form submitted successfully!";
  }
}
