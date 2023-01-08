//Contact Page Navigation
let getHeaderContact= document.getElementsByClassName("list_contact")
//console.log(getHeaderContact)
getHeaderContact[1].setAttribute("href", "./Home.html");
getHeaderContact[2].setAttribute("href", "./ContactUs.html");
getHeaderContact[3].setAttribute("href", "./About.html");



//Form Validation
  
function validate(){
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var atPosition=email.indexOf("@");  
  var dotPosition=email.lastIndexOf(".")
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 5 || name==null || name==""){
    text = "*Name must be at least 5 characters.*";
    error_message.innerHTML = text;
    return false;
  }
  else if(!isNaN(name.value)){
    text = "*Name must be String.*";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 10 || subject==null || subject==""){
    text = "*Subject must be at least 7 characters.*";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 11){
    text = "*Phone number must be at 11 numbers.*";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") < 1 || dotPosition<atPosition+2 || dotPosition+2>=email.length){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length >= 140){
    text = "Please Enter just to 140 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}

  
    