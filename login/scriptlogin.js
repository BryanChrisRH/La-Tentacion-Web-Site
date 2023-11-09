let btnM = document.getElementById('btnM');
let navLinks = document.querySelector('.nav-links');

btnM.onclick = () =>{
    btnM.classList.toggle('fa-times')
    navLinks.classList.toggle('active')
}


$(".input_text").focus(function(){
    $(this).prev('.fa').addclass('glowIcon')
})
$(".input_text").focusout(function(){
    $(this).prev('.fa').removeclass('glowIcon')
})
