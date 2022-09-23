let ligne = "";

for (i=1; i<=100; i++) {
    ligne = i;
    if (i%3 == 0 && i%5 == 00) {
        ligne = "FizzBuzz"
    } else if (i%5 == 0) {
        ligne = "Buzz"
    } else if (i%3 == 0) {
        ligne = "Fizz"
    }
    console.log(ligne);
}
