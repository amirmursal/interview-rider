
let conunter=0;
const getData=()=>{
    console.log("fetch data..", conunter++);
}

const debounce=(fn, delay)=>{
    let timer;
    return function(){
        let context = this, args= arguments;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(context, arguments)
        },delay);
    }
}

const debounceWrapper = debounce(getData, 300)