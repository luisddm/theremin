import $ from './dom';

window.addEventListener('deviceorientation', handleOrientation, true);

$.id('start').addEventListener('click', start);

const context = new window.AudioContext();

const osc = context.createOscillator();
osc.connect(context.destination);

osc.frequency.value = 0;

function handleOrientation({ absolute, alpha, beta, gamma }) {

  const yAxis = Math.round(gamma);
  $.id('y-axis').innerHTML = yAxis;

  const freq = Math.abs(yAxis * 10);
  $.id('freq').innerHTML = freq;

  osc.frequency.value = freq;
  $.id('body').style.backgroundColor = Math.abs(yAxis) > 10 ? 'lightpink' : 'lightblue';
}

function start(event) {
  osc.start();
}
