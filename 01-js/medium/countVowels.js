/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const vowels=["a","e","i","o","u","A","E","I","O","U"];
    let numOfVowels =0; 
    str.split('').map((item)=>{
      for(const i of vowels){
        if(i===item){
          numOfVowels++;
        }
      }
    })
    return numOfVowels;
}
console.log(countVowels("Sayan Das"));
module.exports = countVowels;