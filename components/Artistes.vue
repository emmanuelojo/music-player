<script setup lang="ts">
import { useArtisteStore } from "~/stores/artistesStore";

const artistesStore = useArtisteStore();
const route = useRoute();
const router = useRouter();

const genres = [
    { name: "Worship", category: "worship", link: "/?cat=worship" },
    { name: "African Praise", category: "praise", link: "/?cat=praise" },
    { name: "Chants", category: "chants", link: "/?cat=chants" },
    { name: "Rap", category: "rap", link: "/?cat=rap" },
];

const activeGenre: Ref<string> = ref("");

const routeQuery = ref("");

onMounted(() => {
    if (route.query && route.query.cat) {
        routeQuery.value = route.query.cat.toString();

        switch (routeQuery.value) {
            case genres[1].category:
                setActiveTab(1);
                break;
            case genres[2].category:
                setActiveTab(2);
                break;
            case genres[3].category:
                setActiveTab(3);
                break;
            default:
                setActiveTab(0);
        }
    } else {
        setActiveTab(0);
    }
});

const setActiveTab = (genreIndex: number) => {
    activeGenre.value = genres[genreIndex].name;
    router.push(`/?cat=${genres[genreIndex].category}`);
};
</script>

<template>
    <div class="mt-5 grid gap-5">
        <p class="text-xs text-[#5C5C5C]">What kind of music do you want to listen to today?</p>

        <div class="grid gap-8">
            <div class="flex items-center gap-2 flex-nowrap overflow-auto hide-scrollbar">
                <button
                    v-for="(genre, index) in genres"
                    :key="index"
                    @click="setActiveTab(index)"
                    class="flex justify-center items-center px-4 py-1 text-[10px] font-semibold bg-[#5C5C5C] border rounded-lg hover:border-[#D4D276] hover:text-[#D4D276]"
                    :class="
                        activeGenre === genre.name
                            ? 'border-[#D4D276] text-[#D4D276]'
                            : 'border-transparent text-[#F7F7F7]'
                    "
                >
                    <p class="w-max">{{ genre.name }}</p>
                </button>
            </div>

            <div v-if="activeGenre === genres[0].name" class="flex items-center gap-2 overflow-x-scroll hide-scrollbar">
                <ArtisteCard
                    v-for="(artiste, index) in artistesStore.worshipArtistes"
                    :key="index"
                    :artiste="artiste"
                />
            </div>

            <div v-if="activeGenre === genres[1].name" class="flex items-center gap-2 overflow-x-scroll hide-scrollbar">
                <ArtisteCard v-for="(artiste, index) in artistesStore.praiseArtistes" :key="index" :artiste="artiste" />
            </div>

            <div v-if="activeGenre === genres[2].name" class="flex items-center gap-2 overflow-x-scroll hide-scrollbar">
                <ArtisteCard v-for="(artiste, index) in artistesStore.chantsArtistes" :key="index" :artiste="artiste" />
            </div>

            <!-- <div
        v-if="activeGenre === genres[3]"
        class="flex items-center gap-2 overflow-x-scroll hide-scrollbar"
      >
        <ArtisteCard
          v-for="(artiste, index) in artistesStore.drilleArtistes"
          :key="index"
          :artiste="artiste"
        />
      </div> -->

            <div v-if="activeGenre === genres[3].name" class="flex items-center gap-2 overflow-x-scroll hide-scrollbar">
                <ArtisteCard v-for="(artiste, index) in artistesStore.rapArtistes" :key="index" :artiste="artiste" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
