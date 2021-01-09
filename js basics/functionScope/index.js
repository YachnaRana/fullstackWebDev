// function callTwice(num){
//     for (let i = 0; i < 10; i++) {
//         num();  
//     }
// } 
// function rollDie(){
//     console.log(Math.floor(Math.random()*10)+1);
// }
// callTwice(rollDie);


// function isBetween(min, max){
//     return function(num){
//         return num >= min && num <= max;
//     }
// }
// const isChild = isBetween(1, 17);
// const isAdult = isBetween(18,40);
// const isSenior = isBetween(60, 100);

// console.log(isChild(34))
// console.log(isSenior(85))


// const myObj = {
//     pi: 3.14,
//     square(num){
//         return num*num;
//     },
//     cube(num){
//         return num*num*num;
//     }
// }
// console.log(myObj.square(12)); 
// console.log(myObj.cube(9));

// const myObj = {
//     pi: 3.14,
//     num: 10,
//     multi(){
//         return this.num * this.pi;
//     },
//     add(){
//         return this.num + this.pi;
//     }
// }

// console.log(myObj.multi());
// console.log(myObj.add());
// arr = [" yachna ", "  rana", "rishi  "];
// function cleanNames(arr){
//     return arr.map(function(t){
//         return t.trim();
//     })
    
// }
// console.log(cleanNames([" yachna ", "  rana", "rishi  "]))

// const greet = () => {
//     return console.log(`Hello!`)
// }
// greet()

const allEvens = ((arr) =>{
    if(arr.every(num =>(num%2 === 0))){
        return true;
    }else{
        return false;
    }
        

})

console.log(allEvens([2,4,6,8]))