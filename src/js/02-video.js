import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
  console.log(seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));
let actualTime = localStorage.getItem('videoplayer-current-time');
console.log(actualTime);

player
  .setCurrentTime(actualTime)
  .then(function (seconds) {
    
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });



