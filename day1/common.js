const panels = document.querySelectorAll('.image');

panels.forEach((panel)=>{
   panel.addEventListener('mouseover', ()=>{
    removeActiveClasses()
    panel.classList.add('active')
   })
})


function removeActiveClasses(){
    panels.forEach((panel=>{
        panel.classList.remove('active')
    }))
}