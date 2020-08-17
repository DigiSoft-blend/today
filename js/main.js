

function init(){
    let users=sessionStorage.getItem('Username'); //save username for the browsing session

    if(users){ //if already signed in while refresh...
    document.getElementById("userpara").innerHTML = "Hello, " + users + ", Welcome Back"; 
    document.getElementById("userpara").style.color = "white"
    document.getElementById("user").innerHTML =  users; 
    }
   
    else{ // if not singed in...prompt user to sign in
    let username = prompt("To make your time on this website better, please enter your name.");
  
    if(username==0){
      document.write("<h1>Error....You are not allowed to Access this sight without us knowing who you are, Please Refresh your browser and enter your User Name</h1>")
    }
   else if(username != null){ 
    users=sessionStorage.setItem('Username', username)
    document.getElementById("userpara").innerHTML = "Hello " + username; 
    document.getElementById("user").innerHTML = username; 
    document.getElementById("userpara").style.color = " #add2fc;"; 
    document.getElementById("userpara").style.paddingTop = "70px"; 
    document.getElementById("userpara").style.fontSize = "50px"; 
    document.getElementById("userpara").style.visibility = "visible"; 
    document.getElementById("userpara").style.fontFamily = "Calibri"; 
    }

    else
    { 
      document.write("<h1>We Cant help you if you dont trust Us...When you are ready, kindly refresh your browser and Enter your User Name</h1>")
    }


  } 
}
