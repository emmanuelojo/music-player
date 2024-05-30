<!-- <template>
    <div class="relative h-full bg-[#F8F9FA]">
        <slot />
    </div>
</template> -->

<template>
    <div class="container hide-scrollbar">
        <!-- <router-view /> -->
        <slot />
        <BottomNavBar />
    </div>
</template>

<style scoped>
.container {
    width: 320px;
    height: 640px;
    background: #1f1f1f;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    box-shadow: 0px 56px 72px -30px rgba(50, 55, 63, 0.66);
    font-family: "Poppins", sans-serif;
    line-height: 1.7;
    overflow-x: hidden;
}
</style>
