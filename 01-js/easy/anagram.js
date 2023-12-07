// /*
//   Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
//   What's Anagram?
//   - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
// */


function isAnagram(str1, str2) {
    //if(typeof str1 === "string" && typeof str2 === "string"){
      function getAllPermutations(str){
        if(str.length <= 1){
      
          return [str];
        }
        const permutations=[];
        for(let i=0; i < str.length; i++){
            const firstVal = str[i];
            const remaining = str.slice(0, i) + str.slice(i + 1);
            const subPerms = getAllPermutations(remaining);
            
            for(const perms of subPerms){
              permutations.push(firstVal + perms);
            }
        }
        return permutations;
      }
      const permArray = getAllPermutations(str1.toLowerCase());
      //console.log(permArray);
      for (let i of permArray) {
        if (i===str2.toLowerCase()) {
          return true;
        }
      }
      return false;
   // }else{
//return "Invalid input";
   // }
}
console.log(isAnagram('hello!','llohe'));
module.exports = isAnagram;

