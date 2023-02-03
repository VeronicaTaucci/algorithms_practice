#### Create a function named positiveSum (). In the cats array, the positive numbers represent the male cats, the negative numbers represent the females. Write a function that counts the positive numbers in the list and returns the number of male cats.

<details>
  <summary>Solutions</summary>
  
  <summary>Regular For Loop</summary>

```js

let catArr = [1,2,3,4,5,6,7,8,9,10,11,12,-1,-2,-3,-4,-5,-6,-7,-8]
function positiveSum(arr){
let sum = 0
    for (let i=0; i< arr.length; i++){ 
        if(arr[i]>0){ 
            sum +=1 
        }
    }
    return sum
}
console.log(positiveSum(catArr))
```
  <summary> forEach method</summary>

```js
let catArr = [1,2,3,4,5,6,7,8,9,10,11,12,-1,-2,-3,-4,-5,-6,-7,-8]
function positiveSump(arr){
    let sum = 0
    arr.forEach(num => {
        if(num > 0){
            sum +=1
        }
    })
    return sum
}
console.log(positiveSum(catArr))
```
  <summary> map method</summary>

```js
let catArr = [1,2,3,4,5,6,7,8,9,10,11,12,-1,-2,-3,-4,-5,-6,-7,-8]
function positiveSum(arr){
    let sum = 0
    arr.map(num => {
        if(num > 0){
            sum +=1
        }
    })
    return sum
}
console.log(positiveSum(catArr))
```
  <summary> For of Loop</summary>

```js
let catArr = [1,2,3,4,5,6,7,8,9,10,11,12,-1,-2,-3,-4,-5,-6,-7,-8]
function positiveSum(arr){
    let sum = 0
    for (num of arr){ 
        if(num >0){ 
            sum +=1 
        }
    }
    return sum
}
console.log(positiveSum(catArr))
```
</details>

#### It seems our database is buggy and it stored every cat's name in the wrong way. Create a removeChar () function which takes a list of wrong cat names catNames as an argument, removes the first and the last character from every name, then returns the new list.

<details>
  <summary>Solutions</summary>
  
  <summary>Regular For Loop</summary>

```js
let catNames = ['Lily', 'Eka', 'Oprah', 'Adda','Cora','Lucky']

function removeChar(arrOfCatNames){
    let newArr = []
    for (let i = 0; i < arrOfCatNames.length ; i++){
        newArr.push(arrOfCatNames[i].slice(1,-1))
    }
    return newArr
}
console.log(removeChar(catNames))
```
</details>

#### One of our customers is curious how old the youngest cat in our shelter. Write a function named youngestCat ( ) that takes a list of numbers for catAges as an argument, and returns the smallest number from the list. The number must be concatenated with the "Our youngest cat is. .. years old" text.

<details>
  <summary>Solutions</summary>
  
  <summary>Regular For Loop</summary>

```js
let catAges = [1,2,7,8,9,13,4,5,60,11,12]
function youngestCat(arr){
let youngest = arr[0]
    for (let i=0; i< arr.length; i++){ 
        if(arr[i] < youngest){ 
            youngest = arr[i] 
        }
    }
    return `Our youngest cat is ${youngest} years`
}
console.log(youngestCat(catAges))
```
</details>

#### We need to give the newcomer cats an ID. Create a function named createId () that takes a number as catId and adds every digit into a list, then returns it in a reversed order. For example: 35231 returns [1,3,2,5,3]
<details>
  <summary>Solutions</summary>
  
  <summary>Regular For Loop</summary>

```js
function createID(num){
let idArr = []
let numToString = num.toString() //first we need to convert the number to a string
    for (let i=numToString.length -1; i > 0 ; i--){ 
        //loop through the string, but start at the last character and decrease the number of 'i' each time through the loop
        idArr.push(parseInt(numToString[i])) 
        // parseInt will convert it back to numbers, so instead of this: ['1', '3', '2', '5' ], it converts it to this: [ '1', '3', '2', '5' ]
    }
    return idArr
}

console.log(createID(35231))
```
</details>

#### There is a list of numbers describing which cats are fed in the morning. Unfortunately, a few numbers are missing from the list. Create a function named foodTime () which takes a list of numbers from foodList as an argument and returns a new list which includes the missing numbers. The numbers need to be in ascending order. For example: Input: 1,3,5,6,7,8 Output: 1,2,3,4,5, 6, 7, 8
<details>
  <summary>Solutions</summary>
  
  <summary>Regular For Loop</summary>

```js
let times = [1,3,6,8]
function foodTime(arr){
    let newArr=[]
    for(let i = arr[0]; i<= arr[arr.length -1]; i++){
        newArr.push(i)
    }
    return newArr
}
console.log(foodTime(times))
```
</details>

#### The cat of one of our customers escaped and we were told that his cat is in our shelter. Create a function named searchCat() which takes an array of cats objects and a name string as an argument. If the cat is part of the list, the function must return the object, otherwise it must return 0.


<details>
  <summary>Solutions</summary>
  
  <summary>Regular For Loop</summary>

```js
let cats = [{name:'Lily'}, {name:'Eka'}, {name:'Oprah'}, {name:'Adda'},{name:'Cora'},{name:'Lucky'}]
function searchCat(arrOfObj, missingCatName){
    let result = 0
    for(let i = 0; i< arrOfObj.length; i++){
        if (arrOfObj[i].name == missingCatName){
            result = arrOfObj[i]
        }
    }
    return result
}
console.log(searchCat(cats,'Mara')) //0
console.log(searchCat(cats,'Cora')) // { name: 'Cora' }

```
</details>

#### To our delight, two cats were adopted today, so we can remove them from the list. Create a new function named removeCats () which takes a list of catnames cats as an argument and removes the first and the last elements.


<details>
  <summary>Solutions</summary>
  
  <summary>Regular For Loop</summary>

```js
let catList = ['Lily', 'Eka', 'Oprah', 'Adda','Cora','Lucky']
function removeCats(cats){
    cats.pop() // removes the last element of the array
    cats.shift() //removes the first element of an array
    return cats
}
console.log(removeCats(catList))
```
</details>

#### There are a lot of common cat names around the world. In this shelter, we have a large group of older cats and a large group of kittens. Your job is to find the most common cat names. Create a function named similarCatNames () which takes the olderCats and youngerCats lists as an argument. Compare the two lists. If a cat name is present in both lists, add it to a new list and return the new list in ascending order.

<details>
  <summary>Solutions</summary>
  
  <summary>Regular For Loop</summary>

```js
let catListOld = ['Lily', 'Eka', 'Oprah', 'Adda','Cora','Lucky']
let catListNew = ['Lily', 'Eka', 'Kira', 'Lord','Beka','Adda']
function similarCatNames(oldCats, newCats){
    let result = []
    for(let i=0 ; i< oldCats.length; i++){
        for(let j=0; j< newCats.length; j++){
            if(oldCats[i] === newCats[j]){
                result.push(newCats[j])
            }
        }
    }
    return result
}
console.log(similarCatNames(catListOld, catListNew))
```
</details>

#### We need to display the common cat names in our shelter. How lucky we are to have the similarCats () function we created earlier. Create a new variable named catNames that calls the similarCatNames () function. Give two arguments to the function both of them lists of strings with cat names. It is important to have at least one similar name in both lists.


<details>
  <summary>Solutions</summary>
  
  <summary>Regular For Loop</summary>

```js
let catListOld = ['Lily', 'Eka', 'Oprah', 'Adda','Cora','Lucky']
let catListNew = ['Lily', 'Eka', 'Kira', 'Lord','Beka','Adda']
function similarCatNames(oldCats, newCats){
    let result = []
    for(let i=0 ; i< oldCats.length; i++){
        for(let j=0; j< newCats.length; j++){
            if(oldCats[i] === newCats[j]){
                result.push(newCats[j])
            }
        }
    }
    return result
}
let catNames = similarCatNames(catListOld, catListNew)
console.log(catNames)
```
</details>