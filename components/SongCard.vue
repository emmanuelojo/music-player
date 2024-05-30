<script setup lang="ts">
import Audio1 from "@/public/audio/1.mp3";
import Audio2 from "@/public/audio/1.mp3";
import Audio3 from "@/public/audio/3.mp3";
import Image1 from "@/public/images/1.jpg";
import Image2 from "@/public/images/2.jpg";
import Image3 from "@/public/images/3.jpeg";

const songs = [
    {
        name: "Jazz In Paris",
        artist: "Media Right Productions",
        // src: "/public/audio/1.mp3",
        // cover: "/public/assets/1.jpg",
        src: Audio1,
        cover: Image1,
    },
    {
        name: "Blue Skies",
        artist: "Silent Partner",
        // src: "/public/audio/2.mp3",
        // cover: "/public/images/2.jpg",
        src: Audio2,
        cover: Image2,
    },
    {
        name: "Crimson Fly",
        artist: "Huma-Huma",
        // src: "/public/audio/3.mp3",
        // cover: "/public/images/3.jpeg",
        src: Audio3,
        cover: Image3,
    },
];

const artistName = ref();
const musicName = ref();
const fillBar = ref();
const time = ref("0:00 - 00:00");
const cover = ref();
const activeImage = ref(Image3);
const playBtn = ref();
const prevBtn = ref();
const nextBtn = ref();
const progessBar = ref();
const percentage = ref();

const currentSong = ref(0);
const isPlaying = ref(false);
// const song = ref<HTMLAudioElement>(new Audio());
// const song = ref<HTMLAudioElement>(new Audio(songs[currentSong.value].src));
const song = ref();

onMounted(() => {
    artistName.value = document.getElementsByClassName(".artist-name");
    musicName.value = document.getElementsByClassName(".song-name");
    fillBar.value = document.getElementsByClassName(".fill-bar");
    cover.value = document.getElementById("cover");
    playBtn.value = document.getElementById("play");
    prevBtn.value = document.getElementById("prev");
    nextBtn.value = document.getElementById("next");
    progessBar.value = document.querySelector(".progress-bar");
    song.value = new Audio();

    loadSong(currentSong.value);
    song.value.addEventListener("timeupdate", updateProgress);
});

function loadSong(index: number) {
    const { name, artist, src, cover: thumb } = songs[index];

    console.log(name, artist, src, thumb);
    artistName.value = artist;
    musicName.value = name;
    song.value.src = src;
    activeImage.value = thumb;
}

function updateProgress() {
    if (song.value.duration) {
        const pos = (song.value.currentTime / song.value.duration) * 100;
        // fillBar.value.style.width = `${pos}%`;
        percentage.value = `${pos}%`;

        const duration = formatTime(song.value.duration);
        const currentTime = formatTime(song.value.currentTime);
        time.value = `${currentTime} - ${duration}`;

        // &&currentSong.value!==songs.length-1
        if (pos === 100) {
            isPlaying.value = false;
            nextSong();
        }
    }

    console.log("duration: ", song.value.duration);
}

function formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

function togglePlayPause() {
    if (isPlaying.value) {
        song.value.pause();
    } else {
        song.value.play();
    }

    isPlaying.value = !isPlaying.value;

    // playBtn.value.classList.toggle('fa-pause', isPlaying.value)
    // playBtn.value.classList.toggle('fa-play', !isPlaying.value)
    cover.value.classList.toggle("active", isPlaying.value);
}

function nextSong() {
    currentSong.value = (currentSong.value + 1) % songs.length;
    playMusic();
}

function prevSong() {
    currentSong.value = (currentSong.value - 1 + songs.length) % songs.length;
    playMusic();
}

function playMusic() {
    loadSong(currentSong.value);
    song.value.play();
    isPlaying.value = true;
    cover.value.classList.add("active");
}

function seek(e: MouseEvent) {
    const pos = (e.offsetX / progessBar.value.clientWidth) * song.value.duration;

    song.value.currentTime = pos;
}
</script>

<template>
    <div class="wrapper">
        <div class="container">
            <div class="song-info">
                <div class="artist-name">{{ artistName }} -- {{ isPlaying }}</div>
                <div class="song-name">{{ musicName }}</div>
                <div class="progress-bar" @click="seek">
                    <div class="fill-bar" :style="{ width: percentage }"></div>
                </div>

                <div class="time">{{ time }}</div>
            </div>

            <div class="disk">
                <div id="cover" class="cover" :style="{ 'background-image': `url(${activeImage})` }"></div>

                <div class="circle"></div>
            </div>

            <div class="controls">
                <div id="prev" class="prev-btn" @click="prevSong">
                    <UIcon name="i-heroicons-backward" />
                </div>
                <div id="play" class="play-btn" @click="togglePlayPause">
                    <UIcon v-if="isPlaying" name="i-heroicons-pause" />
                    <UIcon v-else name="i-heroicons-play" />
                </div>
                <div id="next" class="next-btn" @click="nextSong">
                    <UIcon name="i-heroicons-forward" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
body {
    background-color: #ddd;
    margin: 0;
    font-family: "Roboto", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
}

.container {
    position: relative;
    padding: 10px;
    width: 85%;
    max-width: 500px;
}

.container .song-info {
    max-width: 400px;
    background-color: #000;
    margin: 0 15px;
    padding: 15px 15px 5px 150px;
    border-radius: 15px 15px 0 0;
}

.container .song-info .song-name {
    color: #b9b9b9;
    font-size: 14px;
    margin: 3px 0 20px;
}

.container .song-info .artist-name {
    color: #fff;
    font-weight: bold;
    font-size: 18px;
}

.container .song-info .progress-bar {
    background-color: #505050;
    border-radius: 20px;
    cursor: pointer;
}

.container .song-info .progress-bar .fill-bar {
    width: 0;
    height: 6px;
    border-radius: 20px;
    background: #1db954;
}

.container .song-info .time {
    font-size: 15px;
    color: #b9b9b9;
    margin: 10px 0;
}

.container .disk {
    max-width: 120px;
}

.container .disk .active {
    animation: rotate 3s linear 0s infinite forwards;
}

.container .disk .cover {
    width: 145px;
    height: 145px;
    position: absolute;
    top: 10px;
    left: 10px;
    /* top: -65px;
    left: -65px; */
    /* background: url("public/images/1.jpg"); */
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: cover;
    border: 3px solid #fff;
    border-radius: 50%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;
    z-index: 1;
}

.container .disk .circle {
    position: absolute;
    height: 30px;
    width: 30px;
    /* left: 15%;
    top: 29%; */
    left: 13%;
    top: 27%;
    background-color: #fff;
    z-index: 2;
    border-radius: 50%;
}

.container .controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: #292929;
    width: 450px;
    height: 100px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
}

.container .controls #play {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    background-color: #1db954;
    color: #fff;
    /* padding: 15px 17px 14px 18px; */
    padding: 15px;
    font-size: 28px;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.container .controls #play:hover {
    background: #189945;
}

.container .controls div {
    padding: 30px 8px;
    font-size: 35px;
    cursor: pointer;
    color: #919191;
    transition: all 0.3s ease;
}

.container .controls div:hover {
    color: #fff;
}

@keyframes rotate {
    0% {
        transform: rotateZ(0deg);
    }
    100% {
        transform: rotateZ(360deg);
    }
}
</style>
