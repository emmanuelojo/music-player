<script setup lang="ts">
const tabs = [
    { name: "Home", icon: "home", link: "/" },
    { name: "Search", icon: "magnifying-glass" },
    { name: "Favourite", icon: "heart" },
    { name: "Profile", icon: "user" },
];
</script>

<template>
    <div class="w-full h-[60px] sticky bottom-0 flex justify-around items-center bg-[#5C5C5C] rounded-b-[18px]">
        <NuxtLink v-for="(tab, index) in tabs" :key="index" :to="tab.link">
            <button
                class="grid gap-1 text-[#F7F7F7] text-[10px] hover:text-[#D4D276]"
                :class="index === 0 ? 'text-[#D4D276]' : ''"
            >
                <UIcon :name="`i-heroicons-${tab.icon}`" class="w-10 h-5" />

                <p>{{ tab.name }}</p>
            </button>
        </NuxtLink>
    </div>
</template>

<style scoped></style>
