document.querySelector('.add-todo').addEventListener('click', ()=>{
    if(document.querySelector('.todo-input').value !== ''){
    let newLi = document.createElement('li')
    const entry = {
        userInput: `${document.querySelector('.todo-input').value}`,
        date: `${new Date()}`,
        day: `${new Date().getDate()}`,
        month: `${new Date().getMonth()+1}`,
        year: `${new Date().getFullYear()}`,
    }
    newLi.innerText = `${entry.userInput} (${entry.day}/${entry.month}/${entry.year})`
    document.querySelector('.todo-list').appendChild(newLi)
    document.querySelector('.todo-input').value = ''
    addsClassToLi()
    newLi.addEventListener('click',()=>{
        newLi.classList.toggle('strike-through')
    })
    }
})

document.querySelector(".todo-input").addEventListener("keydown", (event)=> {
    if (event.keyCode === 13) {
        if(document.querySelector('.todo-input').value !== ''){
            let newLi = document.createElement('li')
            const entry = {
                userInput: `${document.querySelector('.todo-input').value}`,
                date: `${new Date()}`,
                day: `${new Date().getDate()}`,
                month: `${new Date().getMonth()+1}`,
                year: `${new Date().getFullYear()}`,
            }
            newLi.innerText = `${entry.userInput} (${entry.day}/${entry.month}/${entry.year})`
            document.querySelector('.todo-list').appendChild(newLi)
            document.querySelector('.todo-input').value = ''
            addsClassToLi()
            newLi.addEventListener('click',()=>{
                newLi.classList.toggle('strike-through')
            })
            }
    }
}); 