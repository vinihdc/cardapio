function mostrarPopup(titulo, receita) {
    document.getElementById('popup-titulo').innerText = titulo;
    document.getElementById('popup-texto').innerText = receita;
    document.getElementById('popup').style.display = 'flex';
}

document.getElementById('popup').addEventListener('click', function(event) {
    if (event.target === this) { 
        esconderPopup();
    }
});

function esconderPopup() {
    document.getElementById('popup').style.display = 'none';
}

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