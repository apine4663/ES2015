// What does the following code return?

new Set([1,1,2,2,3,4]) //[1,2,3,4]



// What does the following code return?
//[...new Set("referee")].join("") // 'ref'


// Quick Questions #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

//Map(2) {
//   [1,2,3]=> true
//   [1,2,3]=> false  
// }

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate= (arr)=>new Set(arr).size!== arr.length;

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

const vowelCount = (str)=>{
let newMap= new Map()
let vowel= 'aeiou'
let string= str.toLowerCase()
for (let char of string){
    if(vowel.includes(char)){
        if(newMap.has(char)){
            newMap.set(char,newMap.get(char) ++);
        }else{
            newMap.set(char,1);
        }
    }

}
return newMap;
}