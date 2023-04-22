let loginBtn = document.getElementById('loginbtn');
loginBtn.addEventListener('click',()=>{
    let userName = document.getElementById('user').value;
    let password = document.getElementById('pass').value;
    function validateemail() {
        console.log(userName);
        var atposition = userName.indexOf('@');
        var dotposition = userName.lastIndexOf('.');
        if (atposition < 1 || dotposition < atposition || dotposition + 1 === userName.length) {
            window.alert("Invalid username or password");
          return false;
        } else {
          alert("Email address found!");
          return true;
        }
      }
    if(validateemail()){
        if(password.length>=8){
            window.alert("Registration Completed!!");
            window.location.assign("index.html");
        }
    else{
        window.alert("Invalid username or password");
        userName='';
        password='';
    }
}
})