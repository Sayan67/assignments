/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  
  //Checking if the string is empty or not
  if(str===''){return true};      
  
  ///copying the original variable
  const org=str;       

  //converting the original string to lowercase and eliminating any punctuation and spaces.
  const val=(org.toLowerCase().split('').filter((item1)=>(item1!==' ' && item1!=='/' && item1!=='!' && item1!=='.' && item1!==',' && item1!=='?' )).reduce((item1,item2)=>{return item1+item2}));  

  //doing the same but with reversing the array
  if((str.toLowerCase().split('').reverse().filter((item1)=>(item1!==' ' && item1!=='/' && item1!=='!' && item1!=='.' && item1!==',' && item1!=='?' )).reduce((item1,item2)=>{return item1+item2})) === val){return true;}else{return false;} 
}
module.exports = isPalindrome;
