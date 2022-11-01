const btOn = document.getElementById('btOn');
const btOff = document.getElementById('btOff');
const lamp = document.getElementById('lamp');

function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn(){
    if (!isLampBroken()){
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff(){
    if (!isLampBroken()){
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken(){
    lamp.src = './img/quebrada.jpg';
}

btOn.addEventListener('click', lampOn);
btOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
