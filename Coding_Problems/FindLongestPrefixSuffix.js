
/**
 * You are given a string S. Your task is to determine the length of the longest prefix of the string which is also a suffix, 
 * excluding the entire string itself.
 * Step 1: All prefixes and suffixes
 * input "abbabba":
 * Prefix: "a","ab","abb","abba","abbab","abbabb" (skip full string)
 * Suffixes: "a", "ba", "bba", "abba", "babba","bbabba" (skip full string)
 * Now compare: "abba" appears both as prefix and suffix  So the answer is length = 4
 */

function getPrefixSuffixStringLength(str) {
    for (let i = str.length - 1; i > 0; i--) {
        const prefix = str.substring(0, i)
        const suffix = str.substring(str.length - i)
        if (suffix === prefix) {
            return i;
        }
    }

}

console.log(getPrefixSuffixStringLength("abbabba"))