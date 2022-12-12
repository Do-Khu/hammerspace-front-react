/*
const validateEmail = (email: string) => {
    // Verify if the email string as a '@' and '.', because this is a base to be a valid email.  
    return email?.toString().includes('@') && email?.toString().includes('.')
}
*/

const validatePassword = (pass: string) => {
    /* Normaly is necessary to verify:
        - 1 uppercase letter
        - 1 lowercase letter
        - 1 number
        - 1 special character
        - total size of the password >= 8
    */
    return pass?.toString().length >= 1
}

const validateInput = (pass: string) => {
    //return validateEmail(email) && validatePassword(pass);
    return validatePassword(pass);
}


export {
    validateInput,
    //validateEmail,
    validatePassword
}