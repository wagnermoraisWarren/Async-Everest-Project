<template>
  <div class="center">
    <div class="box">
        <img src="https://www.pngkey.com/png/full/808-8087153_thinking-emoji-discord-emoji-png-png-emoji-art.png" alt="Emoji">
        <p>Nenhum veículo cadastrado para listagem!</p>
        <router-link to="/register">
            <button>Cadastrar</button>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    margin: 0 auto;
    padding: 2rem;
    width: 40%;
    border: none;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 0 1px 1100px hsla(0, 0%, 4%, 0.8)
}

.box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

img {
    width: 10rem;
    margin: 2rem 0;
}

p {
    font-weight: 700;
    color: rgba(0, 0, 0, .8);
}

button {
    padding: .80rem 2rem;
    margin: 2rem 0;
    border: none;
    border-radius: 5px;
    background: var(--main-magenta);
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    transition: 200ms;
}

button:hover {
    background: #bb0e36;
}
</style>