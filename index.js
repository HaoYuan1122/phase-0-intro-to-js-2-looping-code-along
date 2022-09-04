// Code your solutions in this file
const newArray=[]

function writeCards(names,events){
    for(let i=0;i<names.length;i++){
        newArray[i]=`Thank you, ${names[i]}, for the wonderful ${events} gift!`
    }
    return newArray
}
writeCards(["Charlie", "Samip", "Ali"], "birthday")
console.log(newArray)

function countDown(a){
    while(a>=0){
        console.log(a)
        a--
    }
}