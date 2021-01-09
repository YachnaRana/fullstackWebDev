let input = prompt("what do you want to do? (new, list, delete or quit) ")
toDoList = [];
while(input !== "quit"){
    if(input === "list"){
        console.log("===============================")
        for(let i = 0; i < toDoList.length; i++){
            console.log(`${i} : ${toDoList[i]}`)
        }
        console.log("===============================")
    }else if(input === "new"){
        let newToDo = prompt("Enter your To-Do!!")
        toDoList.push(newToDo);
        console.log(toDoList)
    }else if(input === "delete"){
        let index = parseInt(prompt("Enter the index to delete!!"));
        let deletedToDo = toDoList.splice(index, 1);
    }
    input = prompt("what do you want to do? (new, list, delete or quit) ")
}
console.log("quit the app!!!!")