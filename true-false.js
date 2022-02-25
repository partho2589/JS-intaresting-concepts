/* 
falsy
falsh
0 
emty string
undefined
null
NaN
---------------
truthy
true
any string including whitespace '0', 'false'
 any number (positive or negative)
 []
 {}
 anything else that is not falsy will be truthy
*/

const x = parseInt('fjfkj');
if(x){
    console.log('variable is truethy')
}else{
    console.log('variable is falsy')
}