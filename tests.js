QUnit.module("Testing");

test("longest_word", function() {
    equal(longest_word(["Hi", "Hello", "Medallion",
        "Splendiferous", "Pneumonoultramicroscopicsilicovolcanoconiosis"]), 45);
});

test("sum", function() {
    equal(sum([1, 2, 3, 4]), 10);
});

test("multiply", function() {
    equal(multiply([1, 2, 3, 4]), 24);
});

test("expression", function() {
    equal(expression(5, 2, '+'), 7);
    equal(expression(1, 2, '-'), -1);
    equal(expression(1, 2, '*'), 2);
    equal(expression(1, 2, '/'), 0.5);
});

test("duplicate", function() {
    deepEqual(duplicate([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
});

test("FizzBuzz", function() {
    deepEqual(fizzbuzz(3), "Fizz");
    equal(fizzbuzz(5), "Buzz");
    equal(fizzbuzz(15), "FizzBuzz");
    equal(fizzbuzz(7), 7);
});
