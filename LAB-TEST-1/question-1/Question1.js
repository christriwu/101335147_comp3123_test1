/* 
● Create a script with a function named lowerCaseWords that takes a mixed array as input.
  The function will do the following.
   o return a promise that is resolved or rejected 
   o filter the non-strings and lower case the remaining words */ 
const mixedArray =['PIZZA' , 10, true, 25, false, 'Wings']
let myPromise = new Promise(function (resolve, reject){
    let wordArray = mixedArray.filter((element)=>{
        if(typeof element == 'string')
        return element 
    })
    if(wordArray.length > 0){
        return resolve(wordArray);
    }
    else{
        return reject("No words in array");
    }
});

myPromise.then((wordArray)=>{
    let lowerCaseWords = wordArray.map((word)=>{
        return word.toLowerCase();
    })
    console.log(lowerCaseWords)

}).catch((message)=>{

    console.error(message);
})