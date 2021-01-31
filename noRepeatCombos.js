// Challenge definition:
// Create a function that, given a non-negative integer n, will return an array of arrays containing all the possible non-repeating, 2 value combinations of integers from 1 to n.


// Time complexity: O(n(n-(Math.ceil(n/2)))
const calcNumberOfCombos = (num) => {
    return num * (num - Math.ceil(num / 2));
};

const showMeTheCombinations = (num) => {
    if (num < 0) {
        return "The number must not be negative";
    }
    const numOfCombos = calcNumberOfCombos(num);

    const combinations = [];
    // Intentionally set 'i' to 1 and iterate up to num (INCLUSIVE) to make adding
    // the number to the array simple
    for (let i = 1; i <= num; i++) {
        for (let j = i + 1; j <= num; j++) {
            combinations.push([ i, j ]);
            if (i === num - 1 && j === num) {
                console.log(combinations);
                // Time complexity calculation check
                console.log(numOfCombos === combinations.length);
                return combinations;
            }
        }
    }
};
showMeTheCombinations(3);
showMeTheCombinations(9);
showMeTheCombinations(19);
