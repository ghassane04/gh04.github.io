var users=[{
    username: "ghassane",
    password: "ghassane2004",
    email: "ghassane@gmail.com",
    confpassword: "ghassane2004",
  }];
function showPass1(){
    var passValue = document.getElementById('password1');
  
    if (passValue.type == 'text') {
        passValue.type = 'password';
  
    } else if (passValue.type == 'password') {
        passValue.type = 'text';
    }
  }

function login(){
    var userNameIn3 = document.getElementById('username1').value;
    var passwordIn4 = document.getElementById('password1').value;
    if(userNameIn3==''){
      document.getElementById('s1').innerHTML = "Username must be filled out";
        return false;
    }else if(passwordIn4==''){
      document.getElementById('s2').innerHTML = "Password must be filled out";
        return false;
    }
    for(var i=0;i<users.length;i++){
      if(userNameIn3===users[i].username  && passwordIn4===users[i].password){ 
        window.open("courses.html");
        return true;
      }
    }
    document.getElementById('s2').innerHTML = "Password and Username do not match";
        return false;
  }
function add(){
    var userName1 = document.getElementById('username').value;
    var password2 = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var confpassw = document.getElementById('confirm-password').value;
    if (password2.length<8) {
      document.getElementById('sp3').innerHTML = "password must contains 8 characters";
    }else{
    var user = {};
      user.username = userName1;
      user.password = password2;
      user.email = email;
      user.confpassword = confpassw;
      users.push(user); 
                
      console.log(users)

    }
  }
  function showPass2(){
    var passValue = document.getElementById('password');
    var passValue2 = document.getElementById('confirm-password');
  
    if (passValue.type == 'text'&& passValue2.type == 'text') {
        passValue.type = 'password';
        passValue2.type = 'password';
  
    } else if (passValue.type == 'password'&& passValue2.type == 'password') {
        passValue.type = 'text';
        passValue2.type = 'text';
    }
  }
  function display(){
    document.getElementById('login').style.display = "block";
    document.getElementById('signup').style.display = "none";
}
function display2(){
  document.getElementById('login').style.display = "none";
  document.getElementById('signup').style.display = "block";
}
  function sign(){
    var userNamesign = document.getElementById('username').value;
    var passwordsign = document.getElementById('password').value;
    var emailsign = document.getElementById('email').value;
    var confpassign = document.getElementById('confirm-password').value;
    if(userNamesign==''){
      document.getElementById('sp1').innerHTML = "Username must be filled out";
        return false;
    }else if(passwordsign==''){
      document.getElementById('sp3').innerHTML = "Password must be filled out";
        return false;
    }else if(emailsign==''){
      document.getElementById('sp2').innerHTML = "Email must be filled out";
        return false;
    }
    else if(confpassign==''){
      document.getElementById('sp4').innerHTML = "Confirm Password must be filled out";
        return false;
    }else if(confpassign!==passwordsign){
      document.getElementById('sp4').innerHTML = "the Passwords do not match, Retape again!!";
        return false;
    }
    for(var i=0;i<users.length;i++){
      if(userNamesign!==users[i].username  && passwordsign!==users[i].password &&emailsign!==users[i].email  && confpassign!==users[i].confpassword){   
        add();
        display();
        return true;
      }
    }
    document.getElementById('sp4').innerHTML = "Account already existe";
        return false;
  }
  