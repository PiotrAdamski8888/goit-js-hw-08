import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const catchTime = localStorage.getItem(STORAGE_KEY);

if (catchTime) {
  player.setCurrentTime(catchTime);
}

//====================================================================

// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

// player.on('play', function() {
//     console.log('played the video!');
// });

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });

//=====================================================================

//TIMEUPDATE
// player.on('eventName', function(data) {
//   // data is an object containing properties specific to that event
// });

//====================================================================

//const onPlay = function(data) {
// data is an object containing properties specific to that event
//};
//player.on('play', onPlay);

//===================================================================
