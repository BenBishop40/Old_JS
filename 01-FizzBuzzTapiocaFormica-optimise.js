//Déclaration variables
let diviseurs = [3, 5, 7, 13];
let texteAssocie = ["Fizz", "Buzz", "Tapioca", "Formica"];

//Début Algo
for(i=1; i<=200; i++) {
    message = "";
    for(j=0; j<=3; j++) {
        if(i%diviseurs[j]==0) {
            message = message + texteAssocie[j];
            console.log(message);
        }
    } if (message=="") {
        message = i;
        console.log(message);
    }
}