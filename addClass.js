const addsClassToLi = ()=>{
    let arrayOfLis = document.querySelectorAll('li')
    for(const li of arrayOfLis){
        li.classList.add('list-group-item')
    }
}
