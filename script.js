//opdracht A
const addTheWordCool = function(array){
    array.push("cool");
    return array;
};

console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

//oodracht B
const amountOfElementsInArray = (array) => array.length;

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 

//opdracht C
const selectBelgiumFromBenelux = (array) => array[0];

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 

//opdracht D
const lastElementInArray = (array) => array[array.length - 1];

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 

//opdracht E
const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
  
const impeachTrumpSlice = (array) => array.slice(1);

const impeachTrumpSplice = (array) => array.splice(1,3);

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

//opdracht F
const stringsTogether = (array) => array.join(' ');

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']));

//opdracht G
const arrayA = [1,2,3];
const arrayB = [4,5,6];
const combineArrays = (arrayA,arrayB) => arrayA.concat(arrayB);

console.log(combineArrays(arrayA,arrayB));
