let ligne = "";

for (i=1; i<=200; i++) {
    ligne = "";
    if (i%3 == 0) {
        ligne = "Fizz"
    } 
    if (i%5 == 0) {
        ligne = ligne + "Buzz"
    } 
    if  (i%7 == 0) {
        ligne = ligne + "Tapioca"
    } 
    if (i%13 == 0) {
        ligne = ligne + "Formica"
    } 
    if (ligne == "") {
        ligne = i;
    }
console.log(ligne)
}
