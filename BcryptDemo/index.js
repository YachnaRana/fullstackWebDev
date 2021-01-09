const bcrypt = require('bcrypt');

//technique 1: generate a salt and hash on separate function calls
// const hashPassword = async(pw)=>{
//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(pw,salt);
//     console.log(salt);
//     console.log(hash);
// }
// const login = async(pw, hashedPw)=>{
//     const result = await bcrypt.compare(pw, hashedPw);
//     if(result){
//         console.log('you have logged in!!')
//     }else{
//         console.log('incorrect password')
//     }
// }
// hashPassword('monkey');
// login('monkey','$2b$10$eA2eJ9Ug9IPFutj1RnrwAOqDlauxU.R0nC7GE9X3Lw4LHKKCdr0Iq')



//technique 2: auto generate a salt and hash on same function call
const hashPassword = async(pw)=>{
    const hash = await bcrypt.hash(pw,10);
    console.log(hash);
}
const login = async(pw, hashedPw)=>{
    const result = await bcrypt.compare(pw, hashedPw);
    if(result){
        console.log('you have logged in!!')
    }else{
        console.log('incorrect password')
    }
}
// hashPassword('monkey');
login('monkey','$2b$10$eA2eJ9Ug9IPFutj1RnrwAOqDlauxU.R0nC7GE9X3Lw4LHKKCdr0Iq')
