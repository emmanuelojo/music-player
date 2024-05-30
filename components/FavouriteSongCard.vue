<script setup lang="ts">
import type { Artiste } from "~/types/Artiste";
import { useArtisteStore } from "~/stores/artistesStore";

const artistesStore = useArtisteStore();
const router = useRouter();

interface Props {
    artiste: Artiste;
    lastPlayed: string;
}
const props = defineProps<Props>();

// const emit = defineEmits<{
//   (e: "artiste", artiste: Props): Props;
// }>();

// const viewArtisteSongs = () => {
//   emit("artiste", props);
// };

function viewSong() {
    router.push(`/artistes/:${props.artiste.name.toLowerCase()}/:1`);
}
</script>

<template>
    <div @click="viewSong" class="w-full flex justify-between items-center gap-5 cursor-pointer">
        <img
            :src="artiste.image"
            :alt="artiste.name + ' image'"
            class="w-14 h-14 object-cover text-[8px] rounded-md text-[#5C5C5C]"
        />

        <div class="flex justify-between flex-grow gap-5">
            <div class="grid gap-1">
                <p class="text-xs text-[#f1f1f1] font-semibold">
                    {{ artiste.songs[0].title }}
                </p>
                <p class="text-[10px] text-[#B4B4B4] font-semibold">
                    {{ artiste.name }}
                </p>
            </div>

            <p class="text-[10px] text-[#B4B4B4]">{{ lastPlayed }} ago</p>
        </div>
    </div>
</template>

<style scoped></style>
