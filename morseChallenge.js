// Create a function that takes a word in morse code (without spaces), and
// returns the decoded word from the dictionary of words. It can return
// the first word that matches in the dictionary.

// Create a list of words.
const dictionary = [
    'tall',
    'silly',
    'smelly',
    'big'
];

// Map all lowercase letter of the alphabet to its morse equivalent.
const morseMap = {
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--.."
};

// Create a hash map of morse:letter pairs for faster lookup.
const morseDictMap = {};

// Define a function that takes a string of morse dots and dashes and
// an array of words, and returns the first matching word.
const decodeMorse = (morseWord, dictArray) => {
    let response = "Sorry, I couldn't find that word...";

    // Check if the string of dots and dashes is already in the hash map
    // and if so, return the decoded word.
    if (morseDictMap[ morseWord ]) {
        response = morseDictMap[ morseWord ];
    } else {
        // Iterate over the dictionary of words, since there are no spaces in the morse word,
        // and return a string of dots and dashes as the encoded word.
        dictArray.forEach(word => {
            const wordArray = Array.from(word);
            const encodedWord = wordArray.reduce((acc, currVal, idx) => {
                return acc + morseMap[ currVal ];
            }, "");

            // Add the mapping to the morse word hash map.
            morseDictMap[ encodedWord ] = word;
            if (encodedWord === morseWord) {
                response = word;
            }
        });
    }
    return response;
};

decodeMorse("-.-.-...-..", dictionary);
