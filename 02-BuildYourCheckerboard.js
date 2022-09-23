let size;
let character;
let i;
let j;
// Déclarer un nombre pour size
size = 10;
// Déclarer un caractère pour character
character = "X";
for (let i = 0; i < size; i++) {
let line = "";
for (let j = 0; j < size; j++) {
if ((i+j)%2==0) {
line += character;
} else {
line +=" ";
}
}
console.log(line);
}