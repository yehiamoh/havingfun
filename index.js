let arr=[1,2,3,4,5]


console.log(arr)

console.log(typeof arr)

console.log(Array.isArray(arr))

console.log("first element :"+arr[0]+"  last element :"+arr[arr.length-1])

arr.push(10)// adding 10 at the end of the array(act like stack)
var poppedNumber= arr.pop()// remove the last elemnt in the array form the end
console.log("the poopped element is : "+poppedNumber)
console.log(arr)

var arr2=[7,8,9,10,11]
arr2.shift()// remove the first elemnt
console.log(arr2)

arr2.unshift(99) // add elent in the begining of the array 

var index=arr2.indexOf(8)// return index of the elemnt taken
console.log(index)


var slicedArray= arr2.slice(2,4) //  return  a copy of array sliced   start from index 2 to 4-1
console.log(slicedArray)

arr2.splice(1,2);// remove elemnt in the same array from index 1 and take item count which is 2

var isFound=arr2.includes(2)// check for the element in the array and can param from index to check form a certain element

arr2.reverse() // reverse the array


let arr3=[10,20,30,40]
for(let i =0;i<arr3.length;i++){
    if(arr3[i]===20){
        continue; // skip the current iteration and move to the next index
    }
    console.log(arr3[i])
}

for(let i =0;i<arr3.length;i++){
    if(arr3[i]===20){
        break;  // exit from the loop
    }
    console.log(arr3[i])
}


function doAnyThing(s){
    console.log(s)
}
doAnyThing("i dont know what is this hill ")



function mult(n1,n2){
    return n1*n2
}
var res=mult(10,23)
console.log(res)