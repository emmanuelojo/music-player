<script setup lang="ts">
import { useArtisteStore } from "~/stores/artistesStore";

onMounted(() => {});

const artistesStore = useArtisteStore();
</script>

<template>
    <div ref="containerRef" data-scroll-container class="mini-favourites mt-8 grid gap-8">
        <div class="flex justify-between items-center gap-5">
            <h3 class="text-sm text-[#F7F7F7] font-semibold">Favourites</h3>

            <p class="text-[11px] text-[#AAB18B] hover:text-[#BBBD21] font-medium cursor-pointer">See All</p>
        </div>

        <section class="h-fit grid gap-2">
            <FavouriteSongCard :artiste="artistesStore.rapArtistes[0]" last-played="1min" />
            <FavouriteSongCard :artiste="artistesStore.praiseArtistes[0]" last-played="5min" />
            <FavouriteSongCard :artiste="artistesStore.chantsArtistes[0]" last-played="1d" />
            <FavouriteSongCard :artiste="artistesStore.worshipArtistes[0]" last-played="2d" />
        </section>
    </div>
</template>
