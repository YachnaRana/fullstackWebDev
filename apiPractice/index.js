const app = async ()=>{
    const res = await axios.get("https://official-joke-api.appspot.com/jokes/random");
    const questionContainer = document.querySelector("#questionContainer");
    const question = res.data.setup;
    questionContainer.innerHTML = question;
    const btn = document.querySelector("#answer");
    btn.addEventListener("click", ()=>{
    
        const answerContainer = document.querySelector("#answerContainer");
        const ans = res.data.punchline;
        answerContainer.append(ans);
    })
    console.log(res.data)
}
app();