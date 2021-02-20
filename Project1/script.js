'use strict';
const ver = function () {
    modal.style.display = 'block';
};
// Get the modal
var modal = document.querySelector('.modal');
const item = document.getElementsByClassName('nometal');
for (var i = 0; i < item.length; i++) {
    item[i].addEventListener('click', ver);
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

document.querySelector('.elementos').addEventListener('click', function (e) {
    if (e.target.nodeName == 'LI') {
        //console.log(
        //    e.target.getElementsByTagName('h2')[0].innerText + ' clickado'
        //)
        console.log(e.target.innerText + ' clickado');
    }
});
const texto = function (Element) {
    return Element.target.innerText;
};
document.querySelector('.elementos').addEventListener('click', texto);

const lista = [
    'H',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    'He',
    'Li',
    'Be',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    'B',
    'C',
    'N',
    'O',
    'F',
    'Ne',
    'Na',
    'Mg',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    'Al',
    'Si',
    'P',
    'S',
    'Cl',
    'Ar',
    'K',
    'Ca',
    'Sc',
    'Ti',
    'V',
    'Cr',
    'Mn',
    'Fe',
    'Co',
    'Ni',
    'Cu',
    'Zn',
    'Ga',
    'Ge',
    'As',
    'Se',
    'Br',
    'Kr',
    'Rb',
    'Sr',
    'Y',
    'Zr',
    'Nb',
    'Mo',
    'Tc',
    'Ru',
    'Rh',
    'Pd',
    'Ag',
    'Cd',
    'In',
    'Sn',
    'Sb',
    'Te',
    'I',
    'Xe',
    'Cs',
    'Ba',
    'La',
    'Ce',
    'Pr',
    'Nd',
    'Pm',
    'Sm',
    'Eu',
    'Gd',
    'Tb',
    'Dy',
    'Ho',
    'Er',
    'Tm',
    'Yb',
    'Lu',
    'Hf',
    'Ta',
    'W',
    'Re',
    'Os',
    'Ir',
    'Pt',
    'Au',
    'Hg',
    'Tl',
    'Pb',
    'Bi',
    'Po',
    'At',
    'Rn',
    'Fr',
    'Ra',
    'Ac',
    'Th',
    'Pa',
    'U',
    'Np',
    'Pu',
    'Am',
    'Cm',
    'Bk',
    'Cf',
    'Es',
    'Fm',
    'Md',
    'No',
    'Lr',
    'Rf',
    'Db',
    'Sg',
    'Bh',
    'Hs',
    'Mt',
];
let str = [];
const repetido = function () {
    for (let i = 0; i < lista.length; i++) {
        str[i] = `<li class="nometal">${lista[i]}</li>`;
        if (lista[i] == '') {
            str[i] = `<li class="vacio">${lista[i]}</li>`;
        }
        if (
            lista[i] == 'B' ||
            lista[i] == 'Si' ||
            lista[i] == 'Ge' ||
            lista[i] == 'As' ||
            lista[i] == 'Sb' ||
            lista[i] == 'Te' ||
            lista[i] == 'Po'
        ) {
            str[i] = `<li class="nometal">${lista[i]}</li>`;
        }
        if (lista[i] == '') {
            str[i] = `<li class="vacio">${lista[i]}</li>`;
        }
        if (lista[i] == '') {
            str[i] = `<li class="vacio">${lista[i]}</li>`;
        }
    }
    console.log(str[30]);
    document.getElementById('lista').innerHTML = str;
};

document.querySelector('.elementos').addEventListener('click', repetido);
document.querySelector('.elementos').addEventListener('onload', repetido);
