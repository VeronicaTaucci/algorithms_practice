# Create a function named positiveSum (). In the cats array, the positive numbers represent the male cats, the negative numbers represent the females. Write a function that counts the positive numbers in the list and returns the number of male cats.

<details>
  <summary>Solution Regular For Loop</summary>
  
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
<details>
  <summary>Solution: forEach method</summary>

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
<details>
  <summary>Solution: map method</summary>

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
<details>
  <summary>Solution: For of Loop</summary>

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