// Call back functions are very important aspect to cover

//Call back funtion is provided when we want to run a function after a process

/* or
A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished
*/



let display  = (string=> console.log(`Your sum is ${string}`))


function calculator(firstNo ,secondNo){
    let sum=  firstNo +secondNo
    display(sum);    //it is callback function // 

}

calculator(1,2)


// when you will work with complex things like in project

/*
some times you will use callbacks as


function('Do something......' , ('after first process is done')=>{

})

// or you can provide call back on a event after creating a event
below ex is for socket.on event creation


socket.on('read' , (data)=>{

})
*/

