
let Tscore;
let a = 0 , b = 0, c = 0, d = 0 , e = 0;
function btn6(){
    Tscore = Number(a + b + c + d + e);
    document.getElementById("score").innerHTML = "You Scored: " + Tscore;
}

function btn1(){
    let answer;
    answer = document.getElementById("text1").value;
    
    let elem2 = document.getElementById("myDiv");
    
   
if( answer == "A" || answer == "a"){
   document.getElementById("result").innerHTML= "Correct Ans";
   document.getElementById("result").style.color=" rgb(28, 204, 28)";
   document.getElementById("s1").style.color =" rgb(28, 204, 28)";
   document.getElementById("ans1").innerHTML ="1) : You got it";
   document.getElementById("ans1").style.color ="white"
  
   a =  1;
   
}
else{
    document.getElementById("result").innerHTML="Wrong";
    document.getElementById("result").style.color="red";
    document.getElementById("s1").style.color ="green";
    document.getElementById("ans1").innerHTML ="1) : Ans is A &nbsp:x"
   a = 0;
}
}

function btn2(){
    let answer;
    answer = document.getElementById("text2").value;
if( answer == "C" || answer == "c"){
   document.getElementById("result2").innerHTML="Correct Ans";
   document.getElementById("result2").style.color=" rgb(28, 204, 28)";
   document.getElementById("s2").style.color =" rgb(28, 204, 28)";
   document.getElementById("ans2").innerHTML ="2) : You got it"
   document.getElementById("ans2").style.color ="white"
  
   b = 1;
   
}
else{
    document.getElementById("result2").innerHTML="Wrong";
    document.getElementById("result2").style.color="red";
    document.getElementById("s2").style.color ="green";
    document.getElementById("ans2").innerHTML ="2) : Ans is C &nbsp:x"
   b = 0

}
}

function btn3(){
    let answer;
    answer = document.getElementById("text3").value;
if( answer == "D" || answer == "d"){
   document.getElementById("result3").innerHTML="Correct Ans";
   document.getElementById("result3").style.color=" rgb(28, 204, 28)";
   document.getElementById("s3").style.color =" rgb(28, 204, 28)";
   document.getElementById("ans3").innerHTML ="3) : You got it"
   document.getElementById("ans3").style.color ="white"
   c = 1;
}
else{
    document.getElementById("result3").innerHTML="Wrong";
    document.getElementById("result3").style.color="red";
    document.getElementById("s3").style.color ="green";
    document.getElementById("ans3").innerHTML ="3) : Ans is D &nbsp:x"
   c = 0; 
}
}

function btn4(){
    let answer;
    answer = document.getElementById("text4").value;
if( answer == "B" || answer == "b"){
   document.getElementById("result4").innerHTML="Correct Ans";
   document.getElementById("result4").style.color=" rgb(28, 204, 28)";
   document.getElementById("s4").style.color =" rgb(28, 204, 28)";
   document.getElementById("ans4").innerHTML ="4) : You got it"
   document.getElementById("ans4").style.color ="white"
   d = 1;

}
else{
    document.getElementById("result4").innerHTML="Wrong";
    document.getElementById("result4").style.color="red";
    document.getElementById("s4").style.color ="green";
    document.getElementById("ans4").innerHTML ="4) : Ans is B &nbsp:x"
   d = 0;  
}
}

function btn5(){
    let answer;
    answer = document.getElementById("text5").value;
if( answer == "D" || answer =="d"){
   document.getElementById("result5").innerHTML="Correct Ans";
   document.getElementById("result5").style.color="rgb(28, 204, 28)";
   document.getElementById("s5").style.color =" rgb(28, 204, 28)";
   document.getElementById("ans5").innerHTML ="5) : You got it"
   document.getElementById("ans5").style.color ="white"

   e = 1;
}
else{
    document.getElementById("result5").innerHTML="Wrong";
    document.getElementById("result5").style.color="red";
    document.getElementById("s5").style.color ="green";
    document.getElementById("ans5").innerHTML ="5) : Ans is D &nbsp:x"

    e = 0;
}
}