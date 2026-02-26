const words = ["Web3 Builder 🚀", "community helper", "Community Strategist 🌍"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const typing = document.getElementById("typing");

function type() {
currentWord = words[i];
if (isDeleting) {
typing.textContent = currentWord.substring(0, j--);
if (j < 0) {
isDeleting = false;
i = (i + 1) % words.length;
}
} else {
typing.textContent = currentWord.substring(0, j++);
if (j > currentWord.length) {
isDeleting = true;
setTimeout(type, 1000);
return;
}
}
setTimeout(type, 100);
}
type();
