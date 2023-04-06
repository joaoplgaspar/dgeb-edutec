var select = document.getElementById('dificuldade');
var value = select.options[select.selectedIndex].value;

function update() {
    var select = document.getElementById('dificuldade');
    var value = select.options[select.selectedIndex].value;

    console.log(value);
    window.localStorage.setItem('dificuldade', value);
}


