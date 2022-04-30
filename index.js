document.getElementById('user-name').innerText=" Guest";
document.getElementById("msg").innerHTML = "Status: -";

function onLogInOrLogOut(event){
     if(document.getElementById('user-name').innerText==" Guest"){
          document.getElementById('user-name').innerText=" Saran!!!";
          event.srcElement.innerText = "Log Out";
          document.getElementById("msg").innerHTML = "Status: Logged in";

     }
     else{
          document.getElementById('user-name').innerText=" Guest";
          event.srcElement.innerText = "Log In";
          document.getElementById("msg").innerHTML = "Status: Logged Out";
     }
     
}