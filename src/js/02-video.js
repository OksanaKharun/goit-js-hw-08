import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const kayStorage = "videoplayer-current-time";

player.on('timeupdate',throttle(function(data){
    localStorage.setItem(kayStorage, JSON.stringify(data.seconds));
}), 1000)

const getTime = localStorage.getItem(kayStorage); 
  if(getTime){
   player.setCurrentTime(JSON.parse(getTime));
  }; 

player.setCurrentTime()
.then(function(seconds) {})
.catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
            default:
            break;
    }
});
