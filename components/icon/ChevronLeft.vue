<script setup lang="ts">
interface Props {
    fillColour?: string;
}

const props = withDefaults(defineProps<Props>(), {
    fillColour: "",
});
</script>

<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        :fill="fillColour"
        stroke="currentColor"
        class="w-6 h-6"
    >
        <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
    </svg>
</template>
