const addsClassToLi = ()=>{
    let arrayOfLis = document.querySelectorAll('ol>li')
    for(const li of arrayOfLis){
        li.classList.add('list-group-item')
    }
}
