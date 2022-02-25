
/* 
1. variable value not assigned 
2. function but didn't write return
3. just wrote return but didn't return anything
4. parameter that isn't passed 
5. property that doesn't exist in a object 
6. accessing array element out of range
7.
*/

let first;
// console.log(first)

function secound ( x, y){
    const sum = x+ y
}
const result = secound(3, 19)
// console.log(result)


function add (x , y ){
    const sum = x + y
   
    if (y > 10 ){
        return;
    }
    return sum
}


const fouth = add( 10, 5)
// console.log(fouth)

function dobul (a, b){
const mul = a*2
// console.log(b)
return mul

}

dobul(35)
const fifth = { name: 'Rakib', age: 15, location: 'Dhaka'}
// console.log(fifth.phone)
const six = [ 10, 520, 410, 41,4]
// console.log( six[9])
delete six[2];
console.log(six[2] )
