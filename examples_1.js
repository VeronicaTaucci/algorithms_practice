
let catArr = [1,2,3,4,5,6,7,8,9,10,11,12,-1,-2,-3,-4,-5,-6,-7,-8]
function positiveSumRegularLoop(arr){
let sum = 0
    for (let i=0; i< arr.length; i++){ 
        if(arr[i]>0){ 
            sum +=1 
        }
    }
    return sum
}
function positiveSumForEachLoop(arr){
    let sum = 0
    arr.forEach(num => {
        if(num > 0){
            sum +=1
        }
    })
    return sum
}
function positiveSumMapLoop(arr){
    let sum = 0
    arr.map(num => {
        if(num > 0){
            sum +=1
        }
    })
    return sum
}

function positiveSumForOf(arr){
    let sum = 0
    for (num of arr){ 
        if(num >0){ 
            sum +=1 
        }
    }
    return sum
}
console.log(positiveSumRegularLoop(catArr))
console.log(positiveSumForEachLoop(catArr))
console.log(positiveSumMapLoop(catArr))
console.log(positiveSumForOf(catArr))