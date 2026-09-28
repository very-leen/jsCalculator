const answers = [];
function historyCalculations(a, b, operator, result){
    let calculation ={
        a: a,
        b: b,
        operator: operator,
        result: result
    }
    answers.push(calculation)
    console.log(answers);
};
function calculator(a,b, operator){
    if(operator === "+"){
        let result = a+b
        return historyCalculations(a, b, operator, result)
    }else if(operator === "-"){
        result = a-b;
        return historyCalculations(a, b, operator, result)
    }else if(operator === "/" & b !== 0){
        result = a/b;
        return historyCalculations(a, b, operator, result)
    }else if(operator === "*"){
        result = a*b;
        return historyCalculations(a, b, operator, result)
    }else{
        console.log("Invalid operator");
    }
}
calculator(1,3,"+");
calculator(1,2,"/");
calculator(1,4,"*");
calculator(9,4,"-");
calculator(10,4,"-");
