<script setup lang="ts">
import { greetIfMorningOrAfternoonOrEvening } from "../utils/helpers";
</script>

<template>
    <div>
        <div class="flex justify-between items-center">
            <MenuButton />

            <div class="w-9 h-9 rounded-full bg-yellow-200 cursor-pointer">
                <img
                    src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"
                    alt=""
                    class="w-9 h-9 rounded-full object-cover"
                />
            </div>
        </div>

        <h2 class="text-[#F7F7F7] text-xl">
            {{ greetIfMorningOrAfternoonOrEvening() }},
            <br />
            Dev
        </h2>
    </div>
</template>

<style scoped></style>
