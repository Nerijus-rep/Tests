function fizzbuzz(x) {

    if ((x % 3 == 0) && (x % 5 == 0))
        return "FizzBuzz";

    else if (x % 3 == 0)
        return "Fizz";

    else if (x % 5 == 0)
        return "Buzz";

    else
        return x;
};

for (x = 1; x <= 100; x++) {

    if ((x % 3 == 0) && (x % 5 == 0))
        console.log("FizzBuzz");

    else if (x % 3 == 0)
        console.log("Fizz");

    else if (x % 5 == 0)
        console.log("Buzz");

    else
        console.log(x);

};
