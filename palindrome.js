(function(){

    let reverseWord;
    function isPalindrome(word) {


        word = word.toLowerCase();
        reverseWord = word.split("").reverse().join("");

        return word == reverseWord
 
    };
    // console.log(isPalindrome('abcdd'))
    // console.log(reverseWord)
    module.exports = isPalindrome;
})()