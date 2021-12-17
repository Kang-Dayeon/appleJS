const close = document.querySelector('.close');
const alert = document.querySelector('.alert-box');
const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');
const text = document.querySelector('.text');

function change(look, gg){
    alert.style.display = look;
    text.innerHTML = gg;
};

btn.addEventListener('click', function(){change('block', '아이디')});
btn2.addEventListener('click', function(){change('block', '비번')});
close.addEventListener('click', function(){change('none')});

$('.hi').addClass('yellow-bg');