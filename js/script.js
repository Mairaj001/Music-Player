const audio_player=document.getElementById('audio_menubar');
const rotate_img=document.getElementById('rotate_img');
const next_btn=document.getElementById('next_btn');
const prev_btn=document.getElementById('prev_button');
const song_title_1=document.getElementById('song-title_1');
const song_title_2=document.getElementById('song_title_2');



audio_player.addEventListener('play',()=>{
    rotate_img.classList.add('rotate');
});


audio_player.addEventListener('pause',()=>{
    rotate_img.classList.remove('rotate');
});

let current_song_index=0;



const songs = [
    {
        url: 'assets/legend-never-die.mp3',
        image: 'assets/imgs/lgnd-nvr-die.jpg',
        title1: 'Legends Never Dies',
        title2:'Against The Current, League of Legends, Mako'
    },
    {
        url: 'assets/song2.mp3',
        image: 'assets/imgs/henson-sahara.jpeg',
        title1: 'Sahara',
        title2: 'Hensons'
    },
    {
        url: 'assets/song3.m4a',
        image: 'assets/imgs/image3.png',
        title1: 'East Side',
        title2: ' Halsey, Khalid, Benny Blanco'
    },
];

function loadSong(index) {
    audio_player.src = songs[index].url;
    rotate_img.src = songs[index].image;
    song_title_1.textContent = songs[index].title1;
    song_title_2.textContent = songs[index].title2;
    audio_player.load();
    audio_player.play();
}

function rotateImageWhilePlaying() {
    rotate_img.classList.add('rotating');
}

function stopImageRotation() {
    rotate_img.classList.remove('rotating');
}

audio_player.addEventListener('play', rotateImageWhilePlaying);
audio_player.addEventListener('pause', stopImageRotation);
audio_player.addEventListener('ended', stopImageRotation);

prev_btn.addEventListener('click', () => {
    current_song_index = (current_song_index - 1 + songs.length) % songs.length;
    loadSong(current_song_index);
});

next_btn.addEventListener('click', () => {
    current_song_index = (current_song_index + 1) % songs.length;
    loadSong(current_song_index);
});

loadSong(current_song_index);