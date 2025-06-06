<template>
    <div class="main">
        <MainSearchBar />
    </div>
</template>

<script lang="ts" setup>
import MainSearchBar from './MainSearchBar.vue';
</script>

<style scoped lang="scss">
.main {
    display: flex;
    flex-direction: column;
    background-color: #181d2f;
}
</style>