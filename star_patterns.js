// Simple traditional way to make a star pattern
//It is not important to learn all types of pattern
//thing is to learn how the loop works and how we can manipulate the logic with loops


let noOfRows = 5;
let noOfCols = 5;

let str = '';

for (let i = 0; i < noOfCols; i++) {
  
    for (let j = 0; j < i; j++) {
        str += '*'
    }
    str += '\n'
}

console.log(str)



//Modern way to do it using repeat

for(let i=0; i<5 ;i++){
    console.log('*'.repeat(i))
}