<script setup lang="ts">
const isToggled: Ref<boolean> = ref(false);
</script>

<template>
    <button :class="isToggled ? 'hamburger active' : 'hamburger'">
        <span class="line"> </span>
        <span class="line"> </span>
    </button>
</template>

<style scoped>
.hamburger {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
}

.hamburger .line {
    display: block;
    width: 30px;
    height: 3px;
    background-color: #ffffff;
    margin-block: 7px;
    border-radius: 4px;
    transition: transform 0.5s, opacity 0.25s;
}

.hamburger .line:nth-child(2) {
    width: 20px;
}

/* .hamburger.active .line:nth-child(1) {
  transform: translateY(13px) rotate(45deg);
  background-color: #e9e9eb;
}

.hamburger.active .line:nth-child(2) {
  opacity: 0;
}

.hamburger.active .line:nth-child(3) {
  transform: translateY(-13px) rotate(-45deg);
  background-color: #e9e9eb;
} */
</style>
