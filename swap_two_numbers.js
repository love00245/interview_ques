let number1  =1 ;

let number2 =2 ;
let temp = 0;

//with using thried variable
console.log(number1 ,number2)

// temp = number1;
// number1 =number2
// number2 =temp



//without  using third variable


// number1 = number1 +number2;
// number2 = number1 - number2;
// number1 = number1 - number2;
// console.log(number1 ,number2)


//using destructuring


let arr=[number1 ,number2]
arr = [number2 , number1]

console.log(arr)