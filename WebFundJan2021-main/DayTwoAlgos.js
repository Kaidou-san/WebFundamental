//ALGO 1

//For loop -- starts with a variable, continues to run until it reaches the endpoint
//Variable: i, starts at 0
//Endpoint: when i = 10
//How does it get to 10: moves up by 1 with i++
// for(var i=0; i<10; i++){
//     //displays the i value in the terminal
//     console.log(i);
//     //adding 3 to i
//     i+=3;
// }
// console.log(i);

//Start of loop
//Loop 1
// i = 0
// displays i, which is 0
// i = 3
// i = 4
// Loop 2
// displays i, which is 4
// i = 7
// i = 8
// Loop 3
// displays i, which is 8
// i = 11
// i = 12

//Outside loop
// displays i, which is 12


//ALGO 2
// var a is set to 20
// var a = 20;
// //function abc with a parameter for list
// function banana(list){
//     a = 15;
//     console.log(a);
//     return list
// }
// //console log a
// console.log(banana("Hello World!"));

function someName(){
    //this is a basic function that accepts no parameters
}

// var a = 20;
// //function abc with a parameter for list
// function abc(list){
//     a = 15;
//     console.log(a);
// }
// //console log a
// abc(7);
// console.log(a);


// Parameter: gives you a value to work with





//ALGO 3
function sum(list){
    var sum = list[0]; //sum = 1
    // list.length ? -- length of the list == 3
    //indexes can ONLY go up to 1 less than the length
    // list[2] = 3 , that is our last value
    // list[3] = NaN, because it doesn't exist
    for(var i=0; i<list.length; i++){
        sum = sum + list[i]; //adding each # to sum
        console.log(sum); // displaying the value of sum
    }
    return sum;
}
// this gives me an error because list is not defined
// console.log(list);
// Array: ["Hello","two","Seventeen"] -- a row of anything, defined by their index numbers
// Array index #s: 0, 1, 2
// var arr = [true, 19, "hello"] --> arr[0] = true
// arr[1] = 19
// arr[2] = "hello"
var c = sum([1,2,3,4,5,6,7,8])
console.log(c);