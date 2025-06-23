/**
 * const data = { "data": "key=IAfpK, age=58, key=WNVdi, age=64, key=jp9zt, age=47, key=0Sr4C, age=68}
 * which contains a data key and the value is a string which contains items in the format: key=STRING, age=INTEGER. 
 * Your goal is to count how many items exist that have an age equal to or greater than 50, and print this final value.
 *
 */



const data = { "data": "key=IAfpK, age=58, key=WNVdi, age=64, key=jp9zt, age=47, key=0Sr4C, age=68 " }
function getCount() {
    const ages = data.data.split(", ");
    let count = 0
    ages.forEach(element => {
        if (element.startsWith("age") && element.slice(4) >= 50) {
            count++
        }
    });
    return count;
}

console.log(getCount());