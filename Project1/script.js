'use strict';
const ver = function () {
    modal.style.display = 'block';
    console.log('Visto');
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

const verModal = function (param) {
    //document.querySelector(`.${param}`).style.display = 'block';
    console.log(document.querySelector('.gasnoble h2').textContent);
};
const item2 = document.getElementsByClassName('gasnoble');
for (var i = 0; i < item2.length; i++) {
    item2[i].addEventListener(
        'click',
        verModal(document.querySelector('.gasnoble h2').textContent)
    );
}
