<template>
    <header>
        <div class="logo">
            <router-link to="/">
                <img src="https://lp.warren.com.br/hs-fs/hubfs/Logo_warren_white.png?noresize&width=130&name=Logo_warren_white.png" alt="Logo">
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

img {
    width: 7.5rem;
    cursor: pointer;
}
</style>