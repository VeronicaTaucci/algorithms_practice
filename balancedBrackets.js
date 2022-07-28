
//!! solution 1 
function balanced_brackets(codeString) {

    if (!codeString.length) {
        return true
    }

    let stack = []

    let opening = {
        "(": true,
        "{": true,
        "[": true
    }

    let closing = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    for (let i = 0; i < codeString.length; i++) {
        //     {()}
        //       |
        let char = codeString[i]  // { 

        if (opening[char]) {  //opening["{"]
            stack.push(char)  //[{, ]
        }

        if (char in closing) { // closign["("]
            let lastChar = stack.pop  //"("

            if (lastChar !== closing[char]) {
                return false
            }
        }

    }

    if (stack.length === 0) {
        return true
    }
    else {
        return false
    }
}


// ! solution 2
let codeString = '{{[[}]}]'

function evenBrackets(braces) {
    let opening = ['(', '[', '{']
    let closing = [')', ']', '}']
    let arr = []

    for (let i = 0; i < braces.length; i++) {
        if (opening.includes(braces[i])) {
            arr.push(braces[i])
            console.log(arr + ' opening')
        } else
            if (closing.includes(braces[i])) {
                let idx = closing.indexOf[braces[i]]
                arr.splice(opening[idx], 1)
                console.log(arr + ' closing')
            }
            else {
                return false
            }
    }
    console.log(arr)
    return arr.length === 0;
}

console.log(evenBrackets(codeString))