document.querySelector('.add-todo').addEventListener('click', ()=>{
    if(document.querySelector('.todo-input').value !== ''){
    let newLi = document.createElement('li')
    const entry = {
        userInput: `${document.querySelector('.todo-input').value}`,
        date: `${new Date()}`,
        striked: false, 
    }
    newLi.innerText = (entry.userInput + entry.date)
    document.querySelector('.todo-list').appendChild(newLi)
    document.querySelector('.todo-input').value = ''
    addsClassToLi()
    }
})

document.querySelector(".todo-input").addEventListener("keydown", (event)=> {
    if (event.keyCode === 13) {
        if(document.querySelector('.todo-input').value !== ''){
        let newLi = document.createElement('li')
        newLi.innerText = (document.querySelector('.todo-input').value)
        document.querySelector('.todo-list').appendChild(newLi)
        document.querySelector('.todo-input').value = ''
        addsClassToLi()
        }
    }
}); 