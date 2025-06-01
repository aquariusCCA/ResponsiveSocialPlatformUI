<template>
    <div class="right-side">
        <div style="color: lightgray; font-weight: bold;">1</div>
        <div style="color: lightgray; font-weight: bold;">2</div>
        <div style="color: lightgray; font-weight: bold;">3</div>
    </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.right-side {
    overflow: auto;
    display: flex;
    flex-direction: column;
    width: 280px;
    margin-left: auto;
    background-color: #151728;

    @media screen and (max-width: 1210px) {
        position: fixed;
        top: 0;
        right: 0;
        transform: translateX(280px);
        transition: .3s;
    }
}
</style>