1.  let greeting;
    greetign = {};
    console.log(greetign);

    Ans: A: {}
    definition: In this code, a variable greeting is declared but not defined, and a new object {} is mistakenly assigned to greetign. The output is an empty object {} because of the typo in the variable name.

2.  function sum(a, b) {
        return a + b;
    }

    sum(1, "2");

    Ans: C: "12"
    
    definition: The sum function takes two parameters and returns their sum. When called with 1 and "2", JavaScript coerces and concatenates, resulting in "12" as the output.

3.  const food = ["🍕", "🍫", "🥑", "🍔"];
    const info = { favoriteFood: food[0] };

    info.favoriteFood = "🍝";

    console.log(food);

    Ans: A: ['🍕', '🍫', '🥑', '🍔']
    definition:The code initializes an array food, assigns the first element to info.favoriteFood, changes it to "🍝," and logs the food array, which remains unchanged.

4.  function sayHi(name) {
    return `Hi there, ${name}`;
    }

    console.log(sayHi());

    Ans: B: Hi there, undefined
    definition:The sayHi function expects a name parameter, but when called without an argument, it returns a string with "undefined."

5.  let count = 0;
    const nums = [0, 1, 2, 3];

    nums.forEach((num) => {
        if (num) count += 1;
    });

    console.log(count);

    Ans: C: 3
    definition:The code initializes a count variable and an array nums, then uses forEach to iterate through nums and increment count for non-zero elements, resulting in 3 being logged.