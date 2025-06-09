<template>
    <div class="pages box">
        <div class="intro-title">
            Your pages
            <button class="intro-menu"></button>
        </div>
        <div class="user">
            <img 
                src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0f"
                alt="" class="user-img"
            >
            <div class="username">Chandelio</div>
        </div>
        <div class="user">
            <img 
                src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=d5849d81af587a09dbcf3f11f6fa122f"
                class="user-img"
            >
            <div class="username">Janet Jolie</div>
        </div>
        <div class="user">
            <img 
                src="https://images.unsplash.com/photo-1546539782-6fc531453083?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                class="user-img"
            >
            <div class="username">Patrick Watsons</div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.pages {
    margin-top: 20px;
    padding: 20px;
}

.box {
    background-color: #151728;
    border-radius: 4px;
}

.intro-title {
    font-family: "DM Sans", sans-serif;
    color: #5c5e6e;
    font-weight: 600;
    font-size: 18px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.intro-menu {
    background-color: #8f98a9;
    box-shadow: -8px 0 0 0 #8f98a9, 8px 0 0 0 #8f98a9;
    width: 5px;
    height: 5px;
    border: 0;
    padding: 0;
    border-radius: 50%;
    margin-left: auto;
    margin-right: 8px;
}

.user {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.user + .user {
  margin-top: 18px;
}

.user-img {
    width: 45px;
    height: 45px;
    margin-right: 15px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
}

.username {
    color: #ccc8db;
    font-size: 15px;
    font-family: "DM Sans", sans-serif;
}
</style>