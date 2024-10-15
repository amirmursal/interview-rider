
//debouncing is trigger a callback function after specific time 
// throttle is triggle a callback function after specific time but if it will ignore all the events triggers in btween time

const getData = () => {
    console.log("fetching data...");
};

const throttle = (fn, delay) => {
    let isRunning = true; // Changed to true initially
    let timer; 

    return function () {
        const context = this, args = arguments;

        if (isRunning){       
         fn.apply(context, args);
         isRunning = false;
        }

        // Set a timeout to reset isRunning after the delay
        timer = setTimeout(() => {
            isRunning = true; // Reset isRunning after the delay
        }, delay);
    };
};

const getDataWrapper = throttle(getData, 3000);

window.addEventListener("resize", getDataWrapper);



