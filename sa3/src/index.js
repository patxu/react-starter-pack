// change require to es6 import style
import $ from 'jquery';

let timer = 0;

$('#main').html(`You've been on this page for ${timer} seconds.`);

setInterval(() => {
  timer += 1;
  $('#main').html(`You've been on this page for ${timer} seconds.`);
}, 1000);
