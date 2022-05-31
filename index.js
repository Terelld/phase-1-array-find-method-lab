// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ] 

//   array.find(function(currentValue, index, arr),thisValue);
  
// const superbowlWin = record.find((element) => {return element.name == 'W'});

function superbowlWin(record) {
    let wins = record.find (obj => obj.result === 'W')
  if (wins) {
      return wins.year
  }
} 



// (wins ? record.year : undefined )
// array.prototype.find(record => record = W)

// function superbowlWin(result) {
//     return (result === "W");
// }

// function superbowlWin(array) {
//     const found = array.find(object => 
//     // insert condition to match 
//     //use dot notation to check the year property of object)

//     return found
// }