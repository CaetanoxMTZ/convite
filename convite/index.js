const convite = document.getElementById('convite');
const btnNao = document.getElementById('nao');
const btnSim = document.getElementById('sim');

function moverConvite() {
    const x = Math.random() * (window.innerWidth - convite.offsetWidth);
    const y = Math.random() * (window.innerHeight - convite.offsetHeight);
    convite.style.position = 'absolute';
    convite.style.left = x + 'px';
    convite.style.top = y + 'px';
}

btnNao.addEventListener('mouseover', moverConvite);
btnNao.addEventListener('touchstart', moverConvite);

btnSim.addEventListener('click', function() {
    window.location.href = 'https://www.youtube.com/watch?v=1m6en0SQNFs';
});
