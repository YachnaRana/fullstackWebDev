
const buttons = document.querySelectorAll(".btn");
const h1s = document.querySelectorAll("h1");
const input = document.querySelector(".input");



function generateColor(){
    const r = Math.floor(Math.random()*255);
    const c = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r}, ${c}, ${b})`;
}
function changeColor(){
    this.style.backgroundColor = generateColor();
    this.style.color = generateColor();
}

for(const button of buttons){
    button.addEventListener("click", changeColor);
}
for(const h1 of h1s){
    h1.addEventListener("click", changeColor);
}

input.addEventListener("keydown", function(e){
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP")
            break;
            case 'ArrowDown':
                console.log("DOWN")
            break;
            case 'ArrowLeft':
                console.log("LEFT")
            break;
        default:
            document.body.style.backgroundColor = generateColor();
            break;
    }
})

const tweetForm = document.querySelector("#tweetForm");
const tweetList = document.querySelector("#tweets");
const tweet = document.querySelector("#tweet");
// const userName = document.querySelector("#userName");

tweetForm.addEventListener("submit", function(e){
    const listItem = document.createElement("li");
    listItem.innerHTML = tweetForm.elements.tweet.value;
    console.log(tweetForm.elements.tweet.value)
    tweetList.appendChild(listItem);
    e.preventDefault();
})
tweetList.addEventListener("click", function(e){
    e.target.remove();
})

const para = document.querySelector("#para");
const paraBtn = document.querySelector("#paraBtn")
para.addEventListener("click", function(e){
    para.classList.toggle("hide")
})
paraBtn.addEventListener("click", function(e){
    para.style.backgroundColor = generateColor();
    e.stopPropagation();
})

const form = document.querySelector("form");
const ul = document.querySelector("#list");


form.addEventListener("submit",function(e){
    e.preventDefault();
    const li = document.createElement("li");
    const product = document.querySelector("#product");
    const qty = document.querySelector("#qty");
    li.innerHTML = `${qty.value} ${product.value}`;
    console.log(qty.value)
    ul.appendChild(li); 
})

