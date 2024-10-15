const scoreOperations=["1", "2", "D", "C","+"];

const calculateScore = (operations)=>{
    let result= [];

    for (let ops of operations){
        if(!isNaN(ops)){
            result.push(parseInt(ops)); // [1,2]
        }else if(ops === "D"){
         result.push(result[result.length-1]*2); // [1,2,4]
        }else if(ops === "C"){
            result.pop();// [1,2]
        }else if(ops==="+"){
           result.push(result[result.length-1] + result[result.length-2]); // [1, 2, 3]
        }
       
    }
    console.log(result.reduce((a,b)=>a+b)); // 6
}

calculateScore(scoreOperations)