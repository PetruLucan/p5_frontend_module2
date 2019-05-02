function log(a) {
    console.log(a);
}

var defaultButton = document.getElementById('noClass');
var Form = document.getElementById('formId');
defaultButton.addEventListener('click', change);



var lightStatus = 'defaultYellow'
var message = 'Wait'

function change() {
    Form.classList.add('defaultYellow')
    if (lightStatus == 'defaultYellow') {
        Form.classList.add('defaultYellow')
        lightStatus = 'defaultGreen'

    } else if (lightStatus == 'defaultGreen') {
        Form.classList.add('defaultGreen')
        lightStatus = 'defaultRed'

    } else if (lightStatus == 'defaultRed') {
        Form.classList.add('defaultRed')
        lightStatus = 'defaultYellow'
    };
    log(lightStatus)
        // Form.classList.toggle('defaultRed')
    defaultButton.innerHTML = 'Stop'
    if (defaultButton.innerHTML = 'Stop') {
        defaultButton.innerHTML = 'Wait'
    } else if (message = 'Wait') {
        defaultButton.innerHTML = 'Go'
    }
}