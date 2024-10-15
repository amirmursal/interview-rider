const A = [2,5,3,5,2];

var agg = 0;
    
    for(var i=0; i<A.length; i++) {
        agg ^= A[i];
    }
    
    return console.log(agg);