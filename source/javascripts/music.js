var player = document.getElementById('player');

var songList = [
    'music/song1.mp3',
    'music/song2.mp3',
];

// Get random song
player.src = songList[getRandomInt(0, songList.length)];

player.load();
player.play();

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
