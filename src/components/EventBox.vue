<template>
    <div class="event box">
        <div class="event-wrapper">
            <img 
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                class="event-img" 
            />
            <div class="event-date">
                <div class="event-month">Jan</div>
                <div class="event-day">01</div>
            </div>
            <div class="event-title">Winter Wonderland</div>
            <div class="event-subtitle">01st Jan, 2019 07:00AM</div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.event {
    position: relative;
    margin-top: 20px;
    padding: 10px;
}

.box {
    background-color: #151728;
    border-radius: 4px;
}

.event-wrapper {
    position: relative;
}

.event-img {
    max-width: 100%;
    display: block;
    padding-bottom: 12px;
}

.event-date {
    position: absolute;
    left: 20px;
    top: 15px;
}

.event-month {
    background-color: #1687fa;
    padding: 7px 20px;
    font-weight: 600;
    font-family: "DM Sans", sans-serif;
    color: #fff;
    text-align: center;
    border-radius: 4px 4px 0 0;
}

.event-day {
    width: 100%;
    backdrop-filter: blur(4px);
    color: #fff;
    font-size: 22px;
    font-weight: 600;
    font-family: "DM Sans", sans-serif;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 6px 0;
    text-align: center;
}

.event-title {
    color: #c3c5d5;
    margin-bottom: 5px;
    font-family: "DM Sans", sans-serif;
    font-weight: 600;
    padding: 0 14px;
}

.event-subtitle {
    color: #5c5e6e;
    font-family: "DM Sans", sans-serif;
    font-size: 13px;
    font-weight: 500;
    padding: 0 14px;
}
</style>