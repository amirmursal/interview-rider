


function getCharMapCount(str) {
    const charMap = {};
    for (let char of str) {
        charMap[char] = (charMap[char] || 0) + 1
    }
    return charMap;
}

console.log(getCharMapCount("hhhhello characters")) //{ h: 5, e: 2, l: 2, o: 1, ' ': 1, c: 2, a: 2, r: 2, t: 1, s: 1 }