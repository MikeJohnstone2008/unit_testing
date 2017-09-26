//original code:
// (function(){

//         let word = "apple"
//       let letter = "p"
//         let letterCount = 0

//         let letterPos = word.indexOf(letter)
//       while (letterPos >= 0) {
//         letterCount++
//         letterPos = word.indexOf(letter, letterPos + 1)
//         }

//         console.log("Yeah, the letter " + letter + " exists " + letterCount + " times in my word")

//     })()
(function () {
    function hangman(word, letter) {

        let letterCount = 0;

        let letterPos = word.indexOf(letter)
        while (letterPos >= 0) {
            letterCount++
            letterPos = word.indexOf(letter, letterPos + 1)
        }
        return letterCount;

    };
    module.exports = hangman;
})()


