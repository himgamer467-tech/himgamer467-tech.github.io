// Typing Effect
const words = [
"Web3 Enthusiast 🚀",
"Community Builder 🌍",
"Blockchain Explorer 💻"
];

let i=0,j=0,currentWord="",isDeleting=false;
const typing=document.getElementById("typing");

function type(){
currentWord=words[i];
if(isDeleting){
typing.textContent=currentWord.substring(0,j--);
if(j<0){isDeleting=false;i=(i+1)%words.length;}
}else{
typing.textContent=currentWord.substring(0,j++);
if(j>currentWord.length){isDeleting=true;setTimeout(type,1000);return;}
}
setTimeout(type,100);
}
type();

// Particle Background
particlesJS("particles-js",{
particles:{
number:{value:80},
color:{value:"#00ffff"},
shape:{type:"circle"},
opacity:{value:0.5},
size:{value:3},
move:{enable:true,speed:2}
}
});

// Contact Popup
function showContact(){
const popup=document.getElementById("contactPopup");
popup.style.display=popup.style.display==="block"?"none":"block";
}
