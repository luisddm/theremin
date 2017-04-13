import $ from './dom';

window.addEventListener('deviceorientation', handleOrientation, true);

$.id('start').addEventListener('click', start);

const context = new window.AudioContext();

const osc = context.createOscillator();
const amp = context.createGain();

osc.connect(amp);
amp.connect(context.destination);

window.o = osc;
window.a = amp;

osc.frequency.value = 0;
amp.gain.value = 0;

osc.start();

function handleOrientation({ absolute, alpha, beta, gamma }) {

  const yAxis = Math.round(gamma);
  $.id('y-axis').innerHTML = yAxis;

  const freq = Math.abs(yAxis * 10);
  $.id('freq').innerHTML = freq;

  osc.frequency.value = freq;
  $.id('body').style.backgroundColor = Math.abs(yAxis) > 10 ? 'lightpink' : 'lightblue';
}

function start(event) {
  if (amp.gain.value) {
    amp.gain.value = 0;
    $.id('start').innerHTML = 'START';
  } else {
    amp.gain.value = 1;
    $.id('start').innerHTML = 'STOP';
  }
}
