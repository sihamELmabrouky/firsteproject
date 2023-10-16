const borger = document.querySelector('.borger');
const clos = document.querySelector('.close');
const list = document.querySelector('.center');

//navbar
borger.onclick = function () {
    list.style.display = 'block';
    clos.style.display = 'block';
    borger.style.display = 'none';

}
clos.onclick = function () {
    list.style.display = 'none';
    clos.style.display = 'none';
    borger.style.display = 'block';

}