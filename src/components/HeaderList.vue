<template>
    <header>
        <div class="logo">
            <router-link to="/">
                <button>
                    <font-awesome-icon class="fa-2x" icon="fa-solid fa-arrow-left" />
                </button>
            </router-link>
        </div>
        <div class="title">
            <h2>Warren Car System</h2>
        </div>
    </header>
</template>

<script>
export default {
    name: "HeaderList"
}
</script>

<style scoped>
header {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
    background: var(--main-magenta);
}

h2 {
    color: #fff;
}

.logo {
    position: absolute;
    left: 1rem;
}

button {
    background: transparent;
    border: none;
    cursor: pointer;
}
</style>