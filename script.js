let list = document.querySelectorAll('.item');
let next = document.getElementById('prox');
let prev = document.getElementById('ant');
let count = list.length;
let active = 0;

next.onclick = () => {
    let activeinicial = document.querySelector('.active');
    activeinicial.classList.remove('active');

    active = active >= count - 1 ? 0 : active + 1;
    list[active].classList.add('active');
}

prev.onclick = () => { 
    let activeinicial = document.querySelector('.active');
    activeinicial.classList.remove('active');

    active = active <= 0 ? count -1 : active - 1;
    list[active].classList.add('active');
}