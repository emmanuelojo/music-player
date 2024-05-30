<script setup lang="ts">
import type { Artiste, Song } from "~/types/Artiste";
import { truncateString } from "~/utils/helpers";

const router = useRouter();

interface Props {
    artiste: string;
    // song: Song;
    song: any;
    title: string;
    image: string;
    favourite?: boolean;
    lastPlayed?: string;
}
const props = defineProps<Props>();

const emit = defineEmits<{
    (e: "artiste", artiste: Props): Props;
}>();

const isPlaying = ref(false);
const song = ref();

onMounted(() => {
    song.value = new Audio();
    // song.value.src = props.song.src;
    song.value.src = props.song;
});

function viewSong() {
    router.push(`/artistes/:${props.artiste.toLowerCase()}/:${props.title.toLowerCase()}`);
}

function togglePlayPause() {
    if (isPlaying.value) {
        song.value.pause();
    } else {
        song.value.play();
    }

    isPlaying.value = !isPlaying.value;
}
</script>

<template>
    <div @click="viewSong" class="w-full flex justify-between items-center gap-5 cursor-pointer">
        <!-- <img
            :src="song?.image"
            :alt="song?.title + ' image'"
            class="w-14 h-14 object-cover text-[8px] rounded-md text-[#5C5C5C]"
        /> -->
        <img :src="image" :alt="title + ' image'" class="w-14 h-14 object-cover text-[8px] rounded-md text-[#5C5C5C]" />

        <div class="flex justify-between flex-grow gap-5">
            <div class="grid gap-1">
                <p class="text-xs text-[#f1f1f1] font-semibold">
                    <!-- {{ song?.title }} -->
                    {{ title }}
                </p>
                <p class="text-[10px] text-[#B4B4B4] font-semibold">
                    {{ artiste }}
                </p>
            </div>

            <div>
                <div id="play" class="play-btn" @click="togglePlayPause" @click.stop>
                    <UIcon v-if="isPlaying" name="i-heroicons-pause" />
                    <UIcon v-else name="i-heroicons-play" />
                </div>
            </div>

            <p v-if="favourite" class="text-[10px] text-[#B4B4B4]">{{ lastPlayed }} ago</p>
        </div>
    </div>
</template>

<style scoped></style>
