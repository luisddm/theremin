import $ from './dom';

window.addEventListener('deviceorientation', handleOrientation, true);

$.id('start').addEventListener('click', start);

const context = new window.AudioContext();

const osc = context.createOscillator();
osc.connect(context.destination);

osc.frequency.value = 0;

function handleOrientation({ absolute, alpha, beta, gamma }) {

  const value = Math.round(gamma);

  $.id('hola').innerHTML = value;
  osc.frequency.value = Math.abs(value * 10);
  $.id('body').style.backgroundColor = value > 10 ? 'lightpink' : 'lightblue';
}

function start(event) {
  osc.start();
}
