<template>
    <div class="album box">
        <div class="status-main">
            <img 
                src="https://images.genius.com/2326b69829d58232a2521f09333da1b3.1000x1000x1.jpg" 
                class="status-img" 
            />
            <div class="album-detail">
                <div class="album-title">
                    <strong>Quan Ha</strong> create new <span>album</span>
                </div>
                <div class="album-date">6 hours ago</div>
            </div>
            <button class="intro-menu"></button>
        </div>
        <div class="album-content">When the bass drops, so do my problems.
            <div class="album-photos">
                <img 
                    src="https://images.unsplash.com/photo-1508179719682-dbc62681c355?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80"
                    class="album-photo" 
                />
                <div class="album-right">
                    <img 
                        src="https://images.unsplash.com/photo-1502872364588-894d7d6ddfab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                        class="album-photo" 
                    />
                    <img 
                        src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                        class="album-photo" 
                    />
                </div>
            </div>
        </div>
        <div class="album-actions">
            <a href="#" class="album-action">
                <svg 
                    stroke="currentColor" 
                    stroke-width="2" 
                    fill="none" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
                87
            </a>
            <a href="#" class="album-action">
                <svg 
                    stroke="currentColor" 
                    stroke-width="2" 
                    fill="none" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                    class="css-i6dzq1" 
                    viewBox="0 0 24 24"
                >
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
                20
            </a>
            <a href="#" class="album-action">
                <svg 
                    stroke="currentColor" 
                    stroke-width="2"    
                    fill="none" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                    class="css-i6dzq1" 
                    viewBox="0 0 24 24"
                >
                    <path d="M17 1l4 4-4 4" />
                    <path d="M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4" />
                    <path d="M21 13v2a4 4 0 01-4 4H3" />
                </svg>
                13
            </a>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.album {
    padding-top: 20px;
    margin-top: 20px;
}

.box {
    background-color: #151728;
    border-radius: 4px;
}

.status-main {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 20px;
    border: none;
    padding-bottom: 20px;
}

.status-img {
    width: 50px;
    height: 50px;
    margin-right: 20px;
    border-radius: 50%;
    object-fit: cover;
}

.album-detail {
    width: calc(100% - 110px);
}

.album-title span {
    color: #1771d6;
    cursor: pointer;
}

.album-date {
    font-size: 15px;
    color: #595c6c;
    margin-top: 4px;
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
    margin-bottom: auto;
    margin-top: 5px;
}

.album-content {
    padding: 0 20px 20px;
}

.album-photos {
    display: flex;
    margin-top: 20px;
    max-height: 30vh;
}

.album-photo {
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 4px;
    margin-top: 10px;
}

.album-photos>.album-photo {
    width: 50%;
}

.album-right .album-photo {
    height: calc(50% - 10px);
}

.album-actions {
    padding: 0 20px 20px;
}

.album-action {
    margin-right: 20px;
    text-decoration: none;
    color: #a2a4b4;
    display: inline-flex;
    align-items: center;
    font-weight: 600;

    &:hover {
        color: #fff;
    }

    svg {
        width: 16px;
        margin-right: 6px;
    }
}
</style>