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
  transactions.map((item)=>{
    let flag = false;
    if(finalArray.length===0){
      finalArray.push({
        "category": item.category,
        "totalSpent":item.price,
      })
    }else{

      for (const i of finalArray) {
        if(i.category===item.category){
            i.totalSpent += item.price;
            flag=true;
        }
      }
      if(!flag){
        finalArray.push({
          "category": item.category,
          "totalSpent":item.price,
        })
      }
    }
    

  })
  return finalArray;
}
// //const transactions=[
//   {
// 		id: 1,
// 		timestamp: 1656076800000,
// 		price: 10,
// 		category: 'Food',
// 		itemName: 'Pizza',
// 	},
//   {
// 		id: 1,
// 		timestamp: 1656076800000,
// 		price: 10,
// 		category: 'clothe',
// 		itemName: 'Pizza',
// 	},
//   {
// 		id: 1,
// 		timestamp: 1656076800000,
// 		price: 10,
// 		category: 'Food',
// 		itemName: 'Pizza',
// 	},
//   {
// 		id: 1,
// 		timestamp: 1656076800000,
// 		price: 10,
// 		category: 'Food',
// 		itemName: 'Pizza',
// 	},
//   {
// 		id: 1,
// 		timestamp: 1656076800000,
// 		price: 10,
// 		category: 'clothe',
// 		itemName: 'Pizza',
// 	},
//   {
// 		id: 1,
// 		timestamp: 1656076800000,
// 		price: 10,
// 		category: 'Food',
// 		itemName: 'Pizza',
// 	},
//   {
// 		id: 1,
// 		timestamp: 1656076800000,
// 		price: 10,
// 		category: 'Food',
// 		itemName: 'Pizza',
// 	},
//   {
// 		id: 1,
// 		timestamp: 1656076800000,
// 		price: 10,
// 		category: 'Food',
// 		itemName: 'Pizza',
// 	},
//   {
// 		id: 1,
// 		timestamp: 1656076800000,
// 		price: 10,
// 		category: 'clothe',
// 		itemName: 'Pizza',
// 	}
//]
//console.log(calculateTotalSpentByCategory(transactions));
module.exports = calculateTotalSpentByCategory;
