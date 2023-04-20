let register = document.getElementById('getVal');
function validateemail() {
    let x = document.getElementById("userEmail").value;
    console.log(x);
    var atposition = x.indexOf('@');
    var dotposition = x.lastIndexOf('.');
    if (atposition < 1 || dotposition < atposition || dotposition + 1 === x.length) {
      alert("Please enter a valid email address");
      return false;
    } else {
      alert("Email address found!");
      return true;
    }
  }
  
register.addEventListener('click',(email)=>{
    if(validateemail()){
let password=document.getElementById('pass').value;
let confirm = document.getElementById('confirmPass').value;
      if(password!=confirm){
        window.alert("Your password didn't match, try again");
    }
    else if(password===confirm){
    document.getElementById('showpage').innerHTML = "Your Account have been registered";
    }
}
})