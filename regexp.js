// regexp: 


// ^ - start of the pattern
// $ - end of the pattern
// [] - range
// + - 1 or more 
//* - 0 or more
// {n} - exact count
// {n,m} - count b/w n and m
// {n,} - atleast n count
// ? - optional(0 or 1)
// . - any single char
// || - or
// \w - alphanumeric 
// \W - non alphanumeric
// \d - digits only
// \D - non digits
// \s - space only
// \S - non space
// \ - to avoid special meanings


let pattern = /^[a-z0-9A-Z]{5}(k||s)\s$/

let input = "ghh67s "

console.log(pattern.test(input));

let mail = /^\w+@[a-z]+\.[a-z]{2,8}$/

console.log(mail.test("samplegmail.com"));
// console.log("********************************************");

1.// take a single character as input and check weather it is
// Write a JavaScript program that takes a single character as input and checks whether it is:  
//    - An uppercase letter  
//    - A lowercase letter  
//    - A digit  
//    - A special character  
//    Use regular expressions to classify the input.
function valid(str){
    let patterns=/[A-Z]/
    let pattern1=/[a-z]/
    let pattern2=/.d/
    let pattern3=/&,@,~/

    if(patterns.test(str)==true){
     console.log('An Uppercase Letter');
     
    }
     else if(pattern1.test(str)==true){
        console.log('An Lowercase Letter');
        
    } else if(pattern2.test(str)==true){
        console.log('An Digits'); 
    }else{
        console.log('A Special Characters');
        
    }
}


valid("$")


2.// Input Filtering
//    Create a program that restricts user input based on specific criteria:  
//    - Allow alphabets only (both uppercase and lowercase).  
//    - Allow numbers only.  
//    - Allow a combination of alphabets and numbers (alphanumeric).  
//    Use regular expressions to validate the input.

function validate(st){
    let pat=/[A-Z]/
     let pat1=/[0-9]/
     let pat2=/[a-z0-9]/

if(pat.test(st)==true){
    console.log("valid : only alpabets");
    
}else if(pat1.test(st)==true){
    console.log("valid : only numbers");
    
}else{
    console.log("combination of alphabets and numbers");
    
}
}
validate(" 0-9");

// 5. Date Validation (DD/MM/YYYY)
//    Create a regular expression that validates dates in the format `DD/MM/YYYY`:  
//    - Days must be valid (01-31).  
//    - Months must be valid (01-12).  
//    - Years should be four digits.  

function date(fsc){
     let dob=/\d[0-9]+[/][0-9]+[/][0-9]{1,4}/
if(dob.test(fsc)){
    console.log("valid date ");
}else{
console.log("invalid date");   
}
}
date("12/04/2005")

// 7.Phone Number Validation
// Create a regular expression to validate phone numbers in different formats

function phone(no){                                 
    let ph = /^[789]\d{9}$/;
if(ph.test(no)){
    console.log("phone number is valid");
} else{
    console.log("invalid phone number");
    
}
}
phone("9708453769");

// 8.Password Strength Validation
// Write a regular expression to validate strong passwords. A strong password should:
// Contain at least 8 characters.
// Include at least one uppercase letter.
// Include at least one lowercase letter.
// Contain at least one digit.
// Include at least one special character (e.g., @, #, $).   // /^[A-Z][0-9][$,#]$/.test("JLhH11520$#")

function password(psu){
  let ps=/^[A-Z a-z]+[0-9]+[$,#]{2,4}$/;
  if(ps.test(psu)){
    console.log("password is strong");
  }else{
    console.log("password is not strong");
  }
    }
password("JHna8120$#");

