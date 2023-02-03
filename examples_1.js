// let catNames = ['Lily', 'Eka', 'Oprah', 'Adda','Cora','Lucky']

// function removeChar(arrOfCatNames){
//     let newArr = []
//     for (let i = 0; i < arrOfCatNames.length ; i++){
//         newArr.push(arrOfCatNames[i].slice(1,-1))
//     }
//     return newArr
// }
// console.log(removeChar(catNames))


// let catAges = [1,2,7,8,9,13,4,5,60,11,12]
// function youngestCat(arr){
// let youngest = arr[0]
//     for (let i=0; i< arr.length; i++){ 
//         if(arr[i] < youngest){ 
//             youngest = arr[i] 
//         }
//     }
//     return `Our youngest cat is ${youngest} years`
// }
// console.log(youngestCat(catAges))


// function createID(num){
// let idArr = []
// let numToString = num.toString() //first we need to convert the number to a string
//     for (let i=numToString.length -1; i > 0 ; i--){ 
//         //loop through the string, but start at the last character and decrease the number of 'i' each time through the loop
//         idArr.push(parseInt(numToString[i])) 
//         // parseInt will convert it back to numbers, so instead of this: ['1', '3', '2', '5' ], it converts it to this: [ '1', '3', '2', '5' ]
//     }
//     return idArr
// }

// console.log(createID(35231))
// let times = [1,3,6,8]
// function foodTime(arr){
//     let newArr=[]
//     for(let i = arr[0]; i<= arr[arr.length -1]; i++){
//         newArr.push(i)
//     }
//     return newArr
// }
// console.log(foodTime(times))


// let cats = [{name:'Lily'}, {name:'Eka'}, {name:'Oprah'}, {name:'Adda'},{name:'Cora'},{name:'Lucky'}]
// function searchCat(arrOfObj, missingCatName){
//     let result = 0
//     for(let i = 0; i< arrOfObj.length; i++){
//         if (arrOfObj[i].name == missingCatName){
//             result = arrOfObj[i]
//         }
//     }
//     return result
// }
// console.log(searchCat(cats,'Mara')) //0
// console.log(searchCat(cats,'Cora')) // { name: 'Cora' }


// let catList = ['Lily', 'Eka', 'Oprah', 'Adda','Cora','Lucky']
// function removeCats(cats){
//     cats.pop()
//     cats.shift()
//     return cats
// }
// console.log(removeCats(catList))

// let catListOld = ['Lily', 'Eka', 'Oprah', 'Adda','Cora','Lucky']
// let catListNew = ['Lily', 'Eka', 'Kira', 'Lord','Beka','Adda']
// function similarCatNames(oldCats, newCats){
//     let result = []
//     for(let i=0 ; i< oldCats.length; i++){
//         for(let j=0; j< newCats.length; j++){
//             if(oldCats[i] === newCats[j]){
//                 result.push(newCats[j])
//             }
//         }
//     }
//     return result
// }
// console.log(similarCatNames(catListOld, catListNew))


// let catListOld = ['Lily', 'Eka', 'Oprah', 'Adda','Cora','Lucky']
// let catListNew = ['Lily', 'Eka', 'Kira', 'Lord','Beka','Adda']
// function similarCatNames(oldCats, newCats){
//     let result = []
//     for(let i=0 ; i< oldCats.length; i++){
//         for(let j=0; j< newCats.length; j++){
//             if(oldCats[i] === newCats[j]){
//                 result.push(newCats[j])
//             }
//         }
//     }
//     return result
// }
// let catNames = similarCatNames(catListOld, catListNew)
// console.log(catNames)




//TODO
// Create a function named positiveSum () that counts how many positive numbers are in an array.
    // let catArr = [1,2,90,18,4,-1,-2,]

    // function positiveSum(arr){
    //     let result = 0 //5 
    //     for (let i=0; i< arr.length; i++){
    //         if(arr[i] > 0){
    //             result ++
    //         }
    //     }
    //     return result
    // }
    // console.log(positiveSum(catArr))