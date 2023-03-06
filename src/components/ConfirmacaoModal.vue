<template>
  <div class="modal">
    <div class="title">
        <h2>O que deseja fazer?</h2>
    </div>
    <div class="button-box">
        <div class="button">
            <button @click="closeModal">Cadastrar novo carro</button>
        </div>
        <div class="button">
            <router-link to="/list">
                <button>Listar carro cadastrado</button>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "ConfirmacaoModal",

    methods: {
        closeModal() {
            this.$emit("closeModal");
        }
    },
}
</script>

<style scoped>
.modal {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    margin: 0 auto;
    padding: 2rem;
    width: 35%;
    border: none;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 0 1px 1100px hsla(0, 5%, 25%, 1);
}

.title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
}

h2 {
    font-size: 1.8rem;
    color: rgba(0, 0, 0, .8);
}

.button-box {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #c9d3d4;
    border-radius: 5px;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, .4);
    padding: 2rem 3rem;
}

.button {
    padding: 1rem;
}

button {
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    background: var(--main-magenta);
    color: #fff;
    font-weight: 700;
    cursor: pointer;
}
</style>