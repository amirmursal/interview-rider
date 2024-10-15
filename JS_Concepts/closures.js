function printData(){
    var x = 25;
    console.log(x);
    return function y(){
        console.log(y);
    }
    y();
};

printData();







