// roles : takes the value from sign up page and check if the values 
// are correct and valid based on the requiremnets listed below

// to improve
// how i can eliminate the extra numbners 
// check if there is rellya need of error in sign up page 


const nameRegex = /^[a-zA-Z\s'-]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const zipCodeRegex = /^\d{5}$/;
const onlyNumbersMin11Regex = /^\d{10,}$/;

const ExpressionFor = {
    name: (value) =>
    value.trim().length > 2 && nameRegex.test(value),

    lastName: (value) =>
        value.trim().length > 2 && nameRegex.test(value),

    phoneNum: (value) => 
        onlyNumbersMin11Regex.test(value),
    
    email: (value) =>
        emailRegex.test(value),

    password: (value) =>
        value.trim().length >= 8,

    address: (value) =>
        true,

    zipCode: (value) =>
        zipCodeRegex.test(value),

    optional: () => true
}


export function isValid(name, value) {
    if (!value) return false
    const validation = ExpressionFor[name];
    
    if (!validation) return false
    return  validation(value)
    
}




