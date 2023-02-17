<template>
    <header>
        <div class="logo">
            <router-link to="/">
                <img src="../assets/logo.png" alt="Logo">
            </router-link>
        </div>
        <div class="title">
            <h2>Warren Car System</h2>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
}
</script>

<style scoped>

header {
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .0898);
}

h2 {
    color: rgba(0, 0, 0, .7);
}

.logo {
    position: absolute;
    left: 1rem;
}

img {
    width: 6.5rem;
    cursor: pointer;
}
</style>