
// !Exercise 1: Convert two lists into a object (solve it through 2 methods: for...loop and while...loop)
//  Below are the two lists. Write a JS program to convert them into a object  in a way that item from list1 is the key and item from list2 is the value
let keys = ['Violet', 'Dane', 'Tri']
let values = [10, 20, 30]

// # Expected output:
// # { 'Violet': 10, 'Dane': 20, 'Tri': 30 }


// !Exercise 2: Print the value of key ‘history’ from the below obj
let sampleObj = {
    class: {
        student: {
            name: "Mike",
            marks: {
                physics: 70,
                history: 80
            }
        }
    }
}

// !Exercise 3: Print the value of key ‘Gary’ from the below obj
let students = {
    class: {
        cohort_01: {
            students: {
                instructor: "Veronica",
                names: ['Violet', 'Tri', 'Gary']
            }
        }
    }
}

// !Exercise 4: Merge the objects into one
let obj1= {
    Ten: 10,
    Twenty: 20,
    Thirty: 30
    }
let obj2 = {
    Thirty: 30,
    Fourty: 40,
    Fifty: 50
    }

// !Exercise 5: Given the 2 objects:
let employees = ['Kelly', 'Emma']
let defaults = { designation: 'Developer', salary: 8000 }
// create a object  that looks like this: { 'Kelly': { 'designation': 'Developer', 'salary': 8000 }, 'Emma': { 'designation': 'Developer', 'salary': 8000 } }


// !Exercise 6: Create a object  by extracting the keys from a given object 
let sample_obj = {
    name: "Kelly",
    age: 25,
    salary: 8000,
    city: "New york"
}

//  Keys to extract
keys = ["name", "salary"]
// Expected output: { 'name': 'Kelly', 'salary': 8000 }


// !Exercise 7: Delete a list of keys from a object 
sample_obj = {
    name: "Kelly",
    age: 25,
    salary: 8000,
    city: "New york"
}

//  Keys to remove
let keys = ["name", "salary"]
// Expected output: { 'city': 'New york', 'age': 25 }

// !Exercise 8: Get the key of a minimum value from the following object 
let minNum = {
    Physics: 82,
    Math: 65,
    history: 75
}
//  Expected output: Math
