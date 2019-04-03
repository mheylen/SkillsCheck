function addToArray(arr, num1, num2, num3){
arr.push(num3)
arr.push(num2)
arr.push(num1)

let newArray = arr.map(num => num + 1);
return newArray
}

addToArray([], 3, 2, 1);