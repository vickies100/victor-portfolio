console.log("Portfolio website is running!");


// Typing animation

const text = [
"Software Developer",
"Frontend Developer",
"Backend Developer",
"Problem Solver"
];


let index = 0;
let char = 0;


function type(){

if(char < text[index].length){

document.getElementById("typing").textContent += 
text[index].charAt(char);

char++;

setTimeout(type,100);

}

else{

setTimeout(erase,1500);

}

}



function erase(){

if(char > 0){

document.getElementById("typing").textContent =
text[index].substring(0,char-1);

char--;

setTimeout(erase,50);

}

else{

index++;

if(index >= text.length){
index=0;
}

setTimeout(type,500);

}

}


type();




// Dark mode

const themeBtn =
document.getElementById("themeBtn");


themeBtn.onclick = function(){

document.body.classList.toggle("dark");


if(document.body.classList.contains("dark")){

themeBtn.innerHTML="☀️";

}

else{

themeBtn.innerHTML="🌙";

}

};