/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const finalArray = [];
  transactions.map((item)=>{//performing some action on each element
    let flag = false;
    if(finalArray.length===0){//If the final array is empty then create new object
      finalArray.push({
        "category": item.category,
        "totalSpent":item.price,
      })
    }else{
      //If final array is non-empty then iterate through all the elements and check iff the category is already available or not
      for (const i of finalArray) {
        if(i.category===item.category){//if available then add the price to total spent of the category
            i.totalSpent += item.price;
            flag=true;
        }
      }
      if(!flag){
        finalArray.push({//if the category is not available then create a new object of that category
          "category": item.category,
          "totalSpent":item.price,
        })
      }
    }
    

  })
  return finalArray;
}

//console.log(calculateTotalSpentByCategory(transactions));
module.exports = calculateTotalSpentByCategory;
