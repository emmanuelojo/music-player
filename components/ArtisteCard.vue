<script setup lang="ts">
import type { Artiste } from "~/types/Artiste";
import { truncateString } from "~/utils/helpers";

interface Props {
    artiste: Artiste;
}
const props = defineProps<Props>();

const emit = defineEmits<{
    (e: "artiste", artiste: Props): Props;
}>();

const viewArtisteSongs = () => {
    emit("artiste", props);
};

function viewArtiste() {
    navigateTo(`/artistes/:${props.artiste.name.toLowerCase()}`);
}
</script>

<template>
    <div @click="viewArtiste" class="w-[110px] h-[140px] bg-bg-gray rounded-2xl cursor-pointer">
        <img
            :src="artiste.image"
            :alt="artiste.name"
            class="w-[110px] h-[110px] object-cover text-[8px] text-[#5C5C5C] rounded-t-2xl"
        />

        <div class="w-[110px] h-[30px] flex justify-center items-center">
            <p class="text-xs text-[#F7F7F7] text-center font-medium">
                {{ truncateString(artiste.name, 15) }}
            </p>
        </div>
    </div>
</template>

<style scoped></style>
