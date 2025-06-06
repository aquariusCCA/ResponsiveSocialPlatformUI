<template>
    <div class="main">
        <MainSearchBar />

        <div class="main-container">
            <Profile />
        </div>
    </div>
</template>

<script lang="ts" setup>
import MainSearchBar from './MainSearchBar.vue';
import Profile from './Profile.vue';
</script>

<style scoped lang="scss">
.main {
    display: flex;
    flex-direction: column;
    background-color: #181d2f;
}

.main-container {
    flex-grow: 1;
    overflow: auto;
    padding: 20px;
    background-color: #24273b;
}
</style>