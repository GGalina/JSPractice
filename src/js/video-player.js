import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

iframe.style.display = 'flex';
iframe.style.justifyContent = 'center';
iframe.style.margin = '0 auto';
    
const player = new Player(iframe);
let currentTime = JSON.parse(localStorage.getItem('videoplayer-current-time') ?? 0);

function ResumePlayTime(play) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(play.seconds));
};
player.on('timeupdate', throttle(ResumePlayTime, 1000));

player.setCurrentTime(currentTime);