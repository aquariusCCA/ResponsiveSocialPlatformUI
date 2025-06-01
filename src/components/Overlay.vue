<template>
    <div 
        class="overlay" 
        :class="{ 'active': isActive }"
    >
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    isActive: boolean;
}>();
</script>

<style scoped lang="scss">
.overlay {
    visibility: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(36, 39, 59, 0.8);
    opacity: 0;
    pointer-events: none;
    transition: 0.3s;

    &.active {
        visibility: visible;
        z-index: 3;
        opacity: 1;
        pointer-events: all;
    }
}
</style>