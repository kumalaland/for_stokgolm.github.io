function lol() {
    let no = document.createElement('div');
    let btn = document.createElement('button');
    no.textContent = 'лол, нет';
    btn.textContent = 'ну пожалуйста ((';
    document.body.appendChild(no);
    btn.onclick = function() {
        fine(no); // Передаем элемент no в функцию fine
    };
    document.body.appendChild(btn);
    let lobtn = document.getElementsByClassName('lobtn');
    Array.from(lobtn).forEach(element => {
        element.remove();
    });
    btn.classList.add('lll');
}

function fine(no) {
    let newtext = document.createElement('p');
    newtext.textContent = 'ну хорошо, окей. вот подсказка: не думай о значении, думай о МЕСТОРАСПОЛОЖЕНИИ и цифрах';
    document.body.appendChild(newtext);
    let lobtn2 = document.getElementsByClassName('lll');
    Array.from(lobtn2).forEach(element => {
        element.remove();
    });
    no.remove();
}
