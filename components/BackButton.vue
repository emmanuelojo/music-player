<script setup lang="ts">
const route = useRouter();

function goBack() {
    route.back();
}
</script>

<template>
    <button @click="goBack" class="py-1 px-2 flex justify-center items-center bg-white rounded-md shadow-sm">
        <IconChevronLeft fill-colour="#002754" />
    </button>
</template>
