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


/*
  SOME QUESTIONS
*/ 

function greeting (name){
    if(name===undefined){
        return"hi"
    }
    else{
        return "hello"+name
    }
}
console.log(greeting())
console.log(greeting("yehia"))

function maxOfThree(n1,n2,n3){
    return Math.max(n1,n2,n3)// ofcourse iam lazy 
}
console.log(maxOfThree(1,2,3))

function lastChar(s1,s2){
    if(s1[s1.length-1]===s2[s2.length-1]){
        return true
    }else{
        return false
    }
}
console.log(lastChar("yehia","mohamed"))


function onlyOdds(num){
    let sum=0
    for(let i=1;i<num;i+=2){
        sum+=i
    }
    return sum
}
console.log(onlyOdds(6))

function evenArray(array){
    let evenArray=[]
    for(var i =0;i<array.length;i++){
        if(array[i]%2===0){
            evenArray.push(array[i])
        }
        if(evenArray.length===2){
            break;
        }
    }
    return evenArray
}
console.log(evenArray([1,2,3,4,5,6,7]))

var student={
    id:1,
    userName:"yehia",
    phoneNumber:"01097141530",
    cousres:["nodejs","flutter","html"]
}
console.log(student)
console.log(student["id"]) // two similar ways for accessing value key of the object
console.log(student.id)

delete student.phoneNumber // deleting key 
console.log(student)


student.addreess="EGY" // adding new key 
console.log(student)

for(key in student){
    console.log(key+" : "+student[key])// attention 
}

var employee={
    id:2,
    userName:"yousf",
    responsibilties:function (){
        console.log(this.userName +": manager , developer")
    },
    calculateSalary: function (hours,hourRate) {
        return hourRate*hours
    }
}
console.log(employee.responsibilties)
let employeeWage=employee.calculateSalary(5,5)
console.log(employeeWage)
