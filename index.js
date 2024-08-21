
function trigger(){    
    const charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let captcha='';
  for(var i=0;i<6;i++){
    let number = Math.floor(Math.random()*charset.length);
    captcha+=charset[number];
     }
     console.log(captcha)
    document.getElementById("p2").innerHTML =captcha;
    document.getElementsByClassName("handle")[0].innerHTML = "";
    document.getElementById("validr").value=""; // Trim any extra whitespace
}

function validator(){
    var elements=document.getElementsByClassName("handle")
    let conten = document.getElementById("validr").value.trim(); // Trim any extra whitespace
    let victi = document.getElementById("p2").innerHTML.trim();  // Trim any extra whitespace
    if(conten == victi){
       alert("submitted");
       location.reload();
    } else {
        document.getElementsByClassName("handle")[0].innerHTML = "not correct!";
    }
}