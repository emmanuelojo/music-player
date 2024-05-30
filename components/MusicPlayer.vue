<script setup lang="ts">
import type { Song } from "~/types/Artiste";

interface Props {
    artiste: string;
    song: Song;
}

const props = defineProps<Props>();

const artistName = ref();
const musicName = ref();
const fillBar = ref();
const time = ref("0:00 - 00:00");
const cover = ref();
const activeImage = ref(props.song.image);
const playBtn = ref();
const prevBtn = ref();
const nextBtn = ref();
const progessBar = ref();
const percentage = ref();

// const currentSong = ref(0);
const isPlaying = ref(false);
// const song = ref<HTMLAudioElement>(new Audio());
// const song = ref<HTMLAudioElement>(new Audio(songs[currentSong.value].src));
const song = ref();

onMounted(() => {
    // artistName.value = document.getElementsByClassName(".artist-name");
    // musicName.value = document.getElementsByClassName(".song-name");
    fillBar.value = document.getElementsByClassName(".fill-bar");
    cover.value = document.getElementById("cover");
    playBtn.value = document.getElementById("play");
    prevBtn.value = document.getElementById("prev");
    nextBtn.value = document.getElementById("next");
    progessBar.value = document.querySelector(".progress-bar");
    song.value = new Audio();

    loadSong();
    song.value.addEventListener("timeupdate", updateProgress);
});

function loadSong() {
    artistName.value = props.artiste;
    musicName.value = props.song.title;
    song.value.src = props.song.src;
    activeImage.value = props.song.image;
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

    cover.value.classList.toggle("active", isPlaying.value);
}

function nextSong() {
    // currentSong.value = (currentSong.value + 1) % songs.length;
    playMusic();
}

function prevSong() {
    // currentSong.value = (currentSong.value - 1 + songs.length) % songs.length;
    playMusic();
}

function playMusic() {
    // loadSong(currentSong.value);
    loadSong();
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
            <div class="disk">
                <div id="cover" class="cover" :style="{ 'background-image': `url(${activeImage})` }"></div>

                <div class="circle"></div>
            </div>

            <div class="song-info">
                <div class="artist-name">{{ artistName }}</div>
                <div class="song-name">{{ musicName }}</div>
                <div class="progress-bar" @click="seek">
                    <div class="fill-bar" :style="{ width: percentage }"></div>
                </div>

                <div class="time">{{ time }}</div>
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
    /* background-color: #ddd;
    margin: 0;
    font-family: "Roboto", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh; */
}

.wrapper {
    /* height: 100vh; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
}

.container {
    position: relative;
    /* padding: 10px; */
    width: 100%;
    max-width: 500px;
    border: 2px solid white;
}

.container .disk {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container .disk .active {
    animation: rotate 3s linear 0s infinite forwards;
}

.container .disk .cover {
    width: 145px;
    height: 145px;
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
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    z-index: 2;
    border-radius: 50%;
}

.container .song-info {
    /* width: 100%; */
    width: 250px;
    background-color: #000;
    margin: 20px 15px 0 15px;
    padding: 15px 10px;
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

.container .controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: #292929;
    width: 280px;
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
