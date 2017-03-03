const songList = [
    'audio/music/song1.mp3',
    'audio/music/song2.mp3',
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// Public stuff
module.exports = {
    playRandomMusic: function() {
        var player = document.getElementById('player');
        player.src = songList[getRandomInt(0, songList.length)];
        player.load();
        player.play();
    },

    playSFX: function(sound) {
        var audio = new Audio('audio/sfx/' + sound + '.mp3');
        audio.play();
    }
}
