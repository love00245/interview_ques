'use Strict';

let arrOne = [1, 2, 3, 4, 5, 5, 5, 6, 6, 7, 7];

//traditional and long way better to understand deep concepts
let freshArray = [];
function removeDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] != arr[i + 1]) {
            freshArray.push(arr[i]);
        }
    }
    return freshArray;
}

console.log(removeDuplicate(arrOne));

//other way using array methods

let newArray = [];
function remove_duplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!newArray.includes(arr[i])) {
            newArray.push(arr[i]);
        }

    }
    return newArray;
}

console.log(remove_duplicates(arrOne))


//or we can use new set 


let arr_1 =[1,2,2,34,4,55,5,5,55,55,6733];



let sets = new Set(arr_1)

