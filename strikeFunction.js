
document.querySelector('.remove-todo').addEventListener('click', ()=>{
    const AlLis = document.querySelectorAll('ol>li')
    for (const singleLis of AlLis)
    if(singleLis.classList[1]==='strike-through') {
        singleLis.remove()
    }
})
