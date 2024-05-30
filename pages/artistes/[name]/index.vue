<script setup lang="ts">
import type { Artiste } from "~/types/Artiste";
import { useArtisteStore } from "~/stores/artistesStore";
import { useConvertToSmallCase } from "~/utils/helpers";

const artistesStore = useArtisteStore();
const route = useRoute();

const artisteDetailsRef = ref() as Ref<HTMLDivElement>;

const routeParams = ref("");

const artiste: Ref<Artiste | null> = ref(null);

const loading: Ref<boolean> = ref(false);

const artisteNotFound: Ref<boolean> = ref(false);

useSeoMeta({
    title: `${routeParams.value} | Music Player`,
    // description: seoStore.description,
    // ogTitle: `Chat Travels - ${routeParams.value}`,
    // ogDescription: seoStore.description,
    // ogImage: seoStore.image,
    // ogUrl: `http://chatravels.com/destinations/${routeParams.value}`,
    // twitterCard: "summary_large_image",
    // twitterTitle: `Chat Travels - ${routeParams.value}`,
    // twitterDescription: seoStore.description,
    // twitterImage: seoStore.image,
});

onMounted(() => {
    scrollUp();
    routeParams.value = route.params.name.toString().split(":")[1];
    fetchArtiste();
});

onBeforeUnmount(() => {
    loading.value = false;
    artisteNotFound.value = false;
    artiste.value = null;
});

function scrollUp() {
    artisteDetailsRef.value?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function fetchArtiste() {
    loading.value = true;

    setTimeout(() => {
        artiste.value = artistesStore.artistesList.filter(
            (musician: Artiste) => useConvertToSmallCase(musician.name) === routeParams.value.toLowerCase()
        )[0];

        if (artiste.value === undefined) {
            loading.value = false;
            artisteNotFound.value = true;
        } else {
            loading.value = false;
        }
    }, 350);
}
</script>

<template>
    <div ref="artisteDetailsRef" class="h-screen page">
        <div v-if="artiste">
            <div class="relative flex justify-center">
                <div class="absolute top-4 left-0">
                    <BackButton />
                </div>

                <div class="h-fit grid gap-1">
                    <img :src="artiste.image" alt="Image" class="text-sm w-24 h-24 mx-auto object-cover rounded-md" />
                    <h1 class="text-white text-lg">{{ artiste.name }}</h1>
                </div>
            </div>

            <div class="mt-10 grid gap-2 h-fit">
                <div v-for="(song, index) in artiste.songs" :key="index" class="text-white">
                    <music-card :artiste="artiste.name" :song="song.src" :title="song.title" :image="song.image" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
