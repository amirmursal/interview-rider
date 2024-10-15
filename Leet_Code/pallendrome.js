function isPalindrome (s){
    return s === s.split('').reverse().join('');
}

function longestPalindrome(testString){
    let maxLength=0;
    let longestPalindromeString= "";

    for( let i=0; i< testString.length; i++){
        for (let j= i+1; j<=testString.length; j++ ){

            const substring = testString.slice(i, j);
            if(isPalindrome(substring) && substring.length> maxLength){
                maxLength = substring.length;
                longestPalindromeString = substring;
            }

        }
    }
     return longestPalindromeString;

}

console.log(longestPalindrome("amir"));