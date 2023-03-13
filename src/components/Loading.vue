<template>
  <div class="loading">
    <div class="loader"></div>
    <p>Carregando...</p>
  </div>
</template>

<script>
export default {
    name: "Loading"
}
</script>

<style scoped>
.loading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background: #c4bebe5b;
}

.loader {
    border: 30px solid #f3f3f3;
    border-top: 30px solid var(--main-magenta);
    border-radius: 50%;
    width: 13rem;
    height: 13rem;
    animation: spin 800ms linear infinite;
}

p {
    font-size: 2rem;
    font-weight: 700;
    color: rgba(0, 0, 0, .8);
    margin-top: 2rem;
}

@keyframes spin {

    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>