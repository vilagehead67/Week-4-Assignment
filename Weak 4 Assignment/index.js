// Number: 1
function checkJAMBScore(score) {
    if (score >= 180) {
        console.log("Passed");
    }
    else{
        console.log("Failed");
        
    }
}
const studentScore = 150
checkJAMBScore(studentScore)

// Number: 2
function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log("You are eligible"); 
    }
    else{
        console.log("Not eligible");    
    } 
}

const candidateAge = 15
checkVotingEligibility(candidateAge)

// Number: 3
function getScoreGrade(score) {
    if (score >= 90) {
        console.log("Excellent");    
    }
    else if (score < 90 && score >=75) {
        console.log("Good");
    }
    else if (score < 75 && score > 49) {
        console.log("Average");
    }
    else{
        console.log("Fail");  
    }
}

const ayubaScore = 75;
const johnScore = 61;
const jenniferScore = 49;
const alexScore = 93;

getScoreGrade(ayubaScore)
getScoreGrade(johnScore)
getScoreGrade(jenniferScore)
getScoreGrade(alexScore)

// Number: 4
function checkAccess(hasID, isAbove18) {
if (hasID && isAbove18 > 18) {
    return "Access granted";
}
else{
    return "Access denied";
}
}
console.log(checkAccess(true, true));
console.log(checkAccess("hijokaosjoi", 20));
console.log(checkAccess("", false));


// Number: 5
const studentScores = [50, 60, 53, 80, 31, 74, 49, 97, 29, 62, 51 ]
for (let score of studentScores ) {
    if (score > 50) {
        console.log(`${score}-Pass`);   
    } 
    else{
     console.log(`${score}-Fail`);
    }
}


// Number: 6
checkPassStatus = (mathScore, englishScore) => {
    if (mathScore >= 50 && englishScore >= 50) {
        return "Yes";   
    }
    else{
        return "No";
    }
}
 console.log(checkPassStatus(60, 40));
 console.log(checkPassStatus(50, 50))


// Number: 7
function checkUserSignup(email, phoneNumber) {
    if (email || phoneNumber) {
        console.log("Account created successfully")
    } 
    else {
        console.log("Email or phone number require")
    }
}
 
checkUserSignup("tyuueuuch", "")
checkUserSignup(false, false)
checkUserSignup(false, "08182517715")

// Number: 8
function validateInput(username, password) {
    if (!username || !password) {
        return "Invalid input";
    } 
    else {
        return "Valid input";
    }
}
console.log(validateInput(true, true))
console.log(validateInput("vilagehead", "hhhghhasgvh"))
console.log(validateInput("", true))
console.log(validateInput(false, false))



// Number: 9
// Ternary operator is a concise way to write a simple if-else statement in programming. it's called 
// ternary because it takes three arguments. condition ? valueIfTrue : valueIfFalse
 checkWorkStatus = (hoursWorked) => {
   return hoursWorked >= 40 ? "Full-time" : "Part-time"
}
const peterWorkedHours = 60
console.log(checkWorkStatus(peterWorkedHours));

// Number: 10
getLargerNumber = (number1, number2) => {
    return number1 > number2 ? number1 : number2
}

console.log(getLargerNumber(70, 50));
console.log(getLargerNumber(21, 30))

// OR
function getBigNumber(num1, num2) {
    if (num1 > num2) {
        return num1
    } 
    else {
        return num2
    }
    
}

console.log(getBigNumber(90, 29))
console.log(getBigNumber(30, 50))






