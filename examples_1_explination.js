//! Create a removeChar () function which takes a list of names as an argument & removes the first and the last character from every name, 
// then returns the new list.
let catNames = ['Lily', 'Eka', 'Oprah', 'Adda','Cora','Lucky']
function removeChar(arr){
    let newArr = [] // here we are going to save the name after we delete the first and the last letter
    for (let i = 0; i < arr.length ; i++){
        let slicedName = arr[i].slice(1,-1) //this is returning whatever remains after cutting the first and the last letter
        newArr.push(slicedName) //push the remaining letters to the new arr
    }
    return newArr
}
// console.log(removeChar(catNames))

//!Write a function youngestCat ( ) that takes a list of numbers for catAges as an argument, and returns the smallest number from the list.
let catAges = [9,13,4,5,60,11,1,2,7,8,12]
function youngestCat(arr){
let youngest = arr[0] //avem nevoie de o valoare initiala cu care sa comparam celelalte cifre. Putem incepe cu prima cifră din arr
    for (let i=0; i< arr.length; i++){ 
        if(arr[i] < youngest){ // trecând prin loop, dacă găsim o cifră mai mică decât valoarea lui youngest
            youngest = arr[i] // îl înlocuim pe youngest cu cifra care am găsit-o
        }
    }
    return `Our youngest cat is ${youngest} years`
}
console.log(youngestCat(catAges)) // 1


//!Create a function named createId () that takes a number as catId and adds every digit into a list, then returns it in a reversed order. For example: 35231 returns [1,3,2,5,3]
function createID(num){
let idArr = []
let numToString = num.toString() //first we need to convert the number to a string, ex: 1325 -> '1325' 
    for (let i=numToString.length -1; i > 0 ; i--){ // start from the length of the string -1 -> (3) and decrement i each time through the loop
        //loop through the string, but start at the last character and decrease the number of 'i' each time through the loop
        idArr.push(parseInt(numToString[i])) 
        // parseInt will convert it back to numbers, so instead of this: ['1', '3', '2', '5' ], it converts it to this: [ 1,3,2,5]
    }
    return idArr
}

//! Create a function named foodTime () which takes a list of numbers from foodList as an argument and returns a new list which includes the missing numbers. The numbers need to be in ascending order.
let times = [1,3,6,8]
function foodTime(arr){
    let newArr=[]
    for(let i = arr[0]; i<= arr[arr.length -1]; i++){ //we start at the first number in the array (1) and stop at the last number (8) in the array
        newArr.push(i) //push number to the newArr
    }
    return newArr //return the array with all the numbers
}

//!Create a function named searchCat() which takes an array of cats objects and a name string as an argument. If the cat is part of the list, the function must return the object, otherwise it must return 0.

let cats = [{name:'Lily'}, {name:'Eka'}, {name:'Oprah'}, {name:'Adda'},{name:'Cora'},{name:'Lucky'}]

function searchCat(arrOfObj, missingCatName){ //an array and a string will pe passed to the function
    let result = 0 //will change this variable only if there is a match
    for(let i = 0; i< arrOfObj.length; i++){ //loop through each object in the array
        if (arrOfObj[i].name == missingCatName){ //if the name in the object is the same as the string that was passed
            result = arrOfObj[i] // replace the result with the object that is matching
        }
    }
    return result //if the result was replaced we are going to see the object, is there is no match, we are going to get 0 
}
console.log(searchCat(cats,'Mara')) //0
console.log(searchCat(cats,'Cora')) // { name: 'Cora' }

//! Create a new function named removeCats () which takes a list of catnames cats as an argument and removes the first and the last elements.
let catList = ['Lily', 'Eka', 'Oprah', 'Adda','Cora','Lucky']
function removeCats(cats){
    cats.pop() // removes the last element of the array, the array now is ['Lily','Eka', 'Oprah', 'Adda','Cora']
    cats.shift() //removes the first element of an array, the array now is ['Eka', 'Oprah', 'Adda','Cora']
    return cats
}
console.log(removeCats(catList))

//! Create a function named similarCatNames () which takes the olderCats and youngerCats lists as an argument. Compare the two lists. If a cat name is present in both lists, add it to a new list and return the new list in ascending order.
let catListOld = ['Lily', 'Eka', 'Oprah', 'Adda','Cora','Lucky']
let catListNew = ['Lily', 'Eka', 'Kira', 'Lord','Beka','Adda']
function similarCatNames(oldCats, newCats){
    let result = []
    for(let i=0 ; i< oldCats.length; i++){ //loop through the first array
        for(let j=0; j< newCats.length; j++){ //loop through the second array
            if(oldCats[i] === newCats[j]){ //if the name in the first array matches the name in the second one
                result.push(newCats[j]) //push the name to results array
            }
        }
    }
    return result //return the array that holds all the matching instances 
}
console.log(similarCatNames(catListOld, catListNew))