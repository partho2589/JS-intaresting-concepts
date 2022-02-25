function stopWatch (){
    let conunter = 0;
    return function(){
        conunter ++;
        return conunter
    }
}
const clok1 = stopWatch()
console.log(clok1());
console.log(clok1())