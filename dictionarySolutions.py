
#! Exercise 1: Convert two lists into a dictionary
# Below are the two lists.
# Write a Python program to convert them into a dictionary in a way that item from list1 is the key and item from list2 is the value
keys = ['Violet', 'Dane', 'Tri']
values = [10, 20, 30]

# Expected output:
# {'Violet': 10, 'Dane': 20, 'Tri': 30}
newDict = {}

#? for loop
# for i in range(len(keys)):
#     newDict.update({keys[i]: values[i]})
    
# print(newDict)

#? while loop
# i = 0 
# while i < len(keys):
#     newDict.update({keys[i]: values[i]})
#     i+=1
# print(newDict)


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
# print(sampleDict['class']['student']['marks']['history'])

#!Exercise 3: Print the value of key ‘Gary’ from the below dict
students = {
    "class": {
        "cohort_01": { 
        "students": {
            "instructor": "Veronica",
            "names": ['Violet','Tri','Gary']
        }
    }
}
}
# print(students['class']['cohort_01']['students']['names'][2])

#!Exercise 4: Merge the dictionaries into one
dict1 = {'Ten': 10, 'Twenty': 20, 'Thirty': 30}
dict2 = {'Thirty': 30, 'Fourty': 40, 'Fifty': 50}
# dict1.update(dict2)
# print(dict1)

#! Exercise 5: Given the 2 dictionaries:
employees = ['Kelly', 'Emma']
defaults = {"designation": 'Developer', "salary": 8000}
#create a dictionary that looks like this: {'Kelly': {'designation': 'Developer', 'salary': 8000}, 'Emma': {'designation': 'Developer', 'salary': 8000}}
# newEmployee={}
# for i in range(len(employees)):
#     newEmployee.update({employees[i]: defaults})
# print(newEmployee)

#! Exercise 6: Create a dictionary by extracting the keys from a given dictionary
sample_dict = {
    "name": "Kelly",
    "age": 25,
    "salary": 8000,
    "city": "New york"}

# Keys to extract
keys = ["name", "salary"]
# Expected output: {'name': 'Kelly', 'salary': 8000}
# sample_dict1 = {}
# for i in keys:
#     sample_dict1.update({i: sample_dict[i]})
# print(sample_dict1)


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
# for i in keys:
#     sample_dict.pop(i)
# print(sample_dict)

#! Exercise 8: Get the key of a minimum value from the following dictionary
minNum = {
    'Physics': 82,
    'Math': 65,
    'history': 75
}

#find minimum value in dictionary
minimum_value = min(minNum.values())

#get keys with minimal value 
minimum_keys = 0
for key in minNum:
    if minNum[key] == minimum_value:
        minimum_keys = key

#print the minimum keys
print(minimum_keys)
