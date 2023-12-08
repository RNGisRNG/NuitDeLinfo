function afficherImage() {
    document.getElementById('oeuf.png').src = 'oeuf.png';
}

var touchesEnfoncees = {};

function gestionnaireTouchePressee(event) {
    touchesEnfoncees[event.key] = true;

    if (touchesEnfoncees['o'] && touchesEnfoncees['e']&& touchesEnfoncees['u']&& touchesEnfoncees['f']) {
        afficherImage();
    }
}

function gestionnaireToucheRelachee(event) {
    touchesEnfoncees[event.key] = false;
}

document.addEventListener('keydown', gestionnaireTouchePressee);
document.addEventListener('keyup', gestionnaireToucheRelachee);
