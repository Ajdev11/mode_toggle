//const toggle = document.getElementById('toggle')
//toggle.addEventListener('change', (e)=>{
//    document.body.classList.toggle('dark', e.target.checked)
//})
const change_background = document.querySelector('.bi-brightness-high-fill')
change_background.addEventListener('click', (e)=>
{
    document.body.classList.toggle('dark', e.target.checked)
})