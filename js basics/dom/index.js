const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const btn = document.createElement("button");


for(let i=1; i<=100; i++){
    const div = document.createElement('div');
    const newImg = document.createElement('img');
    const btn = document.createElement("button");
    btn.innerHTML = `#${i}`

    
    container.appendChild(div);
    container.appendChild(newImg);
    container.appendChild(btn);
    newImg.src = `${baseURL}${i}.png`

    btn.onclick = function(){
        console.log(`you clicked ${i}th button`)
    }
    newImg.addEventListener("click", ()=>{
        console.log(`${i}th pokemon`)
    }, {once: true})
}

