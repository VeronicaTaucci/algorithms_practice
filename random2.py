
#!1 in the dictionary below, extract the following 
# first_name 
# last_name 
# user's employement title 
# user's key_skills
# user's street address
# user's city 
# user's credit card number 
# user's subscription plan

user = {
    "id": 5487,
    "uid": "7b98255c-be80-483e-a508-1edbc9ffcc58",
    "password": "vtN0KSaejW",
    "first_name": "Regina",
    "last_name": "O'Keefe",
    "username": "regina.o'keefe",
    "email": "regina.o'keefe@email.com",
    "avatar": "https://robohash.org/anihilexcepturi.png?size=300x300&set=set1",
    "gender": "Genderfluid",
    "phone_number": "+240 441.465.1205 x2861",
    "social_insurance_number": "471267534",
    "date_of_birth": "1964-08-23",
    "employment": {
        "title": "Forward Consulting Producer",
        "key_skill": "Networking skills"
    },
    "address": {
        "city": "West Rivabury",
        "street_name": "Kassulke Key",
        "street_address": "63277 Sarita Neck",
        "zip_code": "06366",
        "state": "Illinois",
        "country": "United States",
        "coordinates": {
            "lat": -11.987728561637226,
            "lng": -124.02257039722036
        }
    },
    "credit_card": {
        "cc_number": "5228-8351-1376-5139"
    },
    "subscription": {
        "plan": "Professional",
        "status": "Active",
        "payment_method": "Google Pay",
        "term": "Annual"
    }
}

print(f'''
    first_name: {user['first_name']} 
    last_name: {user['last_name']} 
    employment: {user["employment"]['title']} 
    key_skills: {user["employment"]['key_skill']} 
    street_address: {user["address"]['street_address']} 
    city: {user["address"]['city']} 
    credit_card: {user["credit_card"]['cc_number']} 
    plan: {user["subscription"]['plan']} 
    ''')


#!2 create a loop that counts from 100 to 0 by increments of 5.
# for example
# 100, 95, 90, 85 ...

# for (let i=100
#      i >= 0
#      i++){
#     console.log(i)
#     i -= 6
# }

# let i = 100
# while (i >= 0) {
#     console.log(i)
#     i -= 5
# }

# i=100
# while i >= 0:
#     print(i)
#     i-=5

# for x in range(100,-1,-5):
#     print(x)
        
        
#? recursion
def countdown(num):
    if num == 0:
        return 0
    else:
        print(num)
        return countdown(num-5)


print(countdown(100))
