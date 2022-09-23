// Voici le début de l’algorithme : 
// VARIABLES 
//  digiCode est un tableau d’entier 
//  i est un entier 
// DEBUT 
//  POUR i ALLANT_DE 0 A 3 
//  // Permet de remplir aléatoirement le tableau digiCode 
//  // avec 3 valeurs comprises entre 0 et 9 
//  digiCode[i] <- partieEntiere(random() * 10) 
//  FIN_POUR 
 
//  // Complétez l’algorithme à partir d’ici 
//  // Vous aurez peut-être de nouvelles variables à créer 
// FIN 
let i;
let j;
let digiCode = [];
let digiLookUp = [];

for (i = 0; i <= 3; i ++) {
    digiCode[i] = Math.floor(Math.random()*10);
}
console.log(digiCode);

for (j = 0; j<= 3; j++) {
    for (k = 0; k<= 9; k++) {
       if (digiCode[j] == k) {
        digiLookUp.push(k);
       }
    }
}
console.log("J'ai trouvé le code : [" + digiLookUp + "]");