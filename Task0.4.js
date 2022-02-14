function evenOrOdd(integer){

    if(!Number.isInteger(integer)){
        console.log("input not an integer");
    }else if (integer % 2 == 0){
        console.log("even");
    }else{
        console.log("odd");
    }
};

evenOrOdd("kkk");
evenOrOdd(4);
evenOrOdd(3);
