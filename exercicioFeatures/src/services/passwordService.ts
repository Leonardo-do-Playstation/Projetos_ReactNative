export function passwordService(passwordLength: number){
    let password = ''
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?/`~'

    if(passwordLength <= 0){
        passwordLength = 1
    }

    if(passwordLength > characters.length){
        passwordLength = characters.length
    }
    
    for(let i = 0; i < passwordLength; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    return password
}