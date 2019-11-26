document.querySelector('.remove-todo').addEventListener('click', ()=>{
    document.querySelector('.todo-list').removeChild(document.querySelector('.todo-list').childNodes[Number(document.querySelector('.index-input').value) - 1])
    document.querySelector('.index-input').value = ''
})

document.querySelector(".index-input").addEventListener("keydown", (event)=> {
    if (event.keyCode === 13) {
        document.querySelector('.todo-list').removeChild(document.querySelector('.todo-list').childNodes[Number(document.querySelector('.index-input').value) - 1])
        document.querySelector('.index-input').value = ''
    }
});