let panel = document.querySelectorAll('.panel');

function getClassActive() {
    for (let i = 0; i < panel.length; i++) {
        if (panel[i].classList.contains('active')) {
            return i;
        }
    }
}

for (var i = 0; i < panel.length; i++) {
    panel[i].addEventListener('click', function(){
        panel[getClassActive()].classList.remove('active');
        this.classList.add('active');
    });
}
