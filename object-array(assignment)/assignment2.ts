
//Assignment 2:Manipulating an Array: Rearranging Words
const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
//Convert non-strings to string
scrambledArray[2] = scrambledArray[2].toString(); 
scrambledArray[3] = scrambledArray[3].toString(); 
console.log('\n');
const newArray: string[] = [];
//Rearrange elements in the desired order
newArray.push(scrambledArray[7].toString());
newArray.push(scrambledArray[4].toString()); 
newArray.push(scrambledArray[5].toString());
newArray.push(scrambledArray[0].toString()); 
newArray.push(scrambledArray[1].toString()); 
newArray.push(scrambledArray[6].toString()); 
console.log(newArray);
console.log('\n');
//using join to make it a full sentence
const sentence= newArray.join('');
console.log(sentence);