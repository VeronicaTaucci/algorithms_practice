let arr = [45, 6, 7, 23, 33] //Array

// arr.forEach(el=>{

//     console.log(el);

// })


// class myIterators {

//     // def __init__(self):

//     constructor(arr){
//         // self 
//         this.arr = arr;
//     }

//     // array.forEach(callback(element, index, arr), thisValue)

//     forEach = (callBackFunction) => {

//         for(let i = 0; i< this.arr.length; i++){

//             callBackFunction(this.arr[i], i, this.arr)
//         }
//     }

// }


// let x_arr = new myIterators(arr)


// x_arr.forEach(el=>{
//     console.log(el);
// })


Array.prototype.myForEach = function (callBackFunction) {

    for (let i = 0; i < this.length; i++) {

        callBackFunction(this[i], i, this)
    }

}

arr.myForEach(el => {
    console.log(el);
})