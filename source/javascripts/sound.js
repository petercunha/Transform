const MUSIC_DIR = 'audio/music/';
const SFX_DIR   = 'audio/sfx/';
const SONG_LIST = [
    'song1.mp3',
    'song2.mp3',
    'song3.mp3',
    'song4.mp3',
    'song5.mp3'
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {

    // Play a random song
    playRandomMusic: function() {
        var player = document.getElementById('player');
        player.src = MUSIC_DIR + SONG_LIST[getRandomInt(0, SONG_LIST.length)];
        player.load();
        player.play();
    },

    // Play a sound effect
    playSFX: function(sound) {
        var audio = new Audio(SFX_DIR + sound + '.mp3');
        audio.play();
    }
    
}
