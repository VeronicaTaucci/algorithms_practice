
#! Exercise 1: Convert two lists into a dictionary (solve it through 2 methods: for...loop and while...loop)
# Below are the two lists. 
# Write a Python program to convert them into a dictionary in a way that item from list1 is the key and item from list2 is the value
keys = ['Violet', 'Dane', 'Tri']
values = [10, 20, 30]

# Expected output:
# {'Violet': 10, 'Dane': 20, 'Tri': 30}


#!Exercise 2: Print the value of key ‘history’ from the below dict
sampleDict = {
    "class": {
        "student": {
            "name": "Mike",
            "marks": {
                "physics": 70,
                "history": 80
            }
        }
    }
}

#!Exercise 3: Print the value of key ‘Gary’ from the below dict
students = {
    "class": {
        "cohort_01": {
            "students": {
                "instructor": "Veronica",
                "names": ['Violet', 'Tri', 'Gary']
            }
        }
    }


#!Exercise 4: Merge the dictionaries into one
dict1 = {'Ten': 10, 'Twenty': 20, 'Thirty': 30}
dict2 = {'Thirty': 30, 'Fourty': 40, 'Fifty': 50}

#! Exercise 5: Given the 2 dictionaries:
employees = ['Kelly', 'Emma']
defaults = {"designation": 'Developer', "salary": 8000}
#create a dictionary that looks like this: {'Kelly': {'designation': 'Developer', 'salary': 8000}, 'Emma': {'designation': 'Developer', 'salary': 8000}}


#! Exercise 6: Create a dictionary by extracting the keys from a given dictionary
sample_dict = {
"name": "Kelly",
"age": 25,
"salary": 8000,
"city": "New york"}

# Keys to extract
keys = ["name", "salary"]
# Expected output: {'name': 'Kelly', 'salary': 8000}


#!Exercise 7: Delete a list of keys from a dictionary
sample_dict = {
"name": "Kelly",
"age": 25,
"salary": 8000,
"city": "New york"
}

# Keys to remove
keys = ["name", "salary"]
# Expected output:
# {'city': 'New york', 'age': 25}

#! Exercise 8: Get the key of a minimum value from the following dictionary
minNum = {
'Physics': 82,
'Math': 65,
'history': 75
}
# Expected output:
# Math
