// const p1Button = document.querySelector("#p1Button");
// const p2Button = document.querySelector("#p2Button");
// const p1Display = document.querySelector("#p1Display")
// const p2Display = document.querySelector("#p2Dispaly")

// p1Button.addEventListener("click", function(e){
//     p1Display.innerHTML += 1;
// })


// const fakeRequestPromises = (url) => {
//     return new Promise((resolve, reject)=>{
//         const delay = Math.floor(Math.random()*4500)+500;
//         setTimeout(()=>{
//             if(delay > 4000){
//                 resolve('ur fake data is from ' + url)
//             }else{
//                 reject("connection time out :(")
//             }
//         }, delay)
//     }) 
// }
// fakeRequestPromises("page.com/page1")
//     .then((data) => {
//         console.log("page1");
//         return fakeRequestPromises("page.com/page2")
//     })
//     .then((data)=>{
//         console.log("page2");
//         return fakeRequestPromises("page.com/page3")
//     })
//     .then((data)=>{
//         console.log("page3");
//         return fakeRequestPromises("page.com/page4")
//     })
//     .then((data)=>{
//         console.log("page4");
//     })
//     .catch((err) => {
//         console.log(err)
//     })




   
    

// const asyncPromise = async (username , password) => {
//     if(username === "yachu"){
//         throw `function error with ${password}` ;
//     }
//     return `welcome ${username}`;
// }
// asyncPromise("yachu", "loveyou")
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })


const fakeRequestPromises = (url) => {
    return new Promise((resolve, reject)=>{
        const delay = Math.floor(Math.random()*4500)+500;
        setTimeout(()=>{
            if(delay < 1000){
                resolve('ur fake data is from ' + url)
            }else{
                reject("connection time out :(")
            }
        }, delay)
    }) 
}

async function makeRequest(){
    try{
        const page1 = await fakeRequestPromises("page.com/page1");
        console.log(page1);
        const page2 = await fakeRequestPromises("page.com/page2");
        console.log(page2);
        const page3 = await fakeRequestPromises("page.com/page3");
        console.log(page3);
    }catch(e){
        console.log("uffff error");
        console.log("ur error is " + e)
    }
    
}
makeRequest();

// fakeRequestPromises("page.com/page1")

//     .then((data) => {
//         console.log("page1");
//         return fakeRequestPromises("page.com/page2")
//     })
//     .then((data)=>{
//         console.log("page2");
//         return fakeRequestPromises("page.com/page3")
//     })
//     .then((data)=>{
//         console.log("page3");
//         return fakeRequestPromises("page.com/page4")
//     })
//     .then((data)=>{
//         console.log("page4");
//     })
//     .catch((err) => {
//         console.log(err)
//     })