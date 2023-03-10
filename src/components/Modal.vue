<template>
  <div class="modal">
    <div class="title">
        <h2>Informações do veículo</h2>
        <div class="icon">
            <font-awesome-icon class="fa-2x" icon="fa-solid fa-xmark" @click="closeModal" />
        </div>
    </div>
    <div class="modal-details">
        <div class="column">
            <div class="column-data">
                <h3>Modelo</h3>
                <p> {{ modalDetails.model }} </p>
            </div>
            <div class="column-data">
                <h3>Placa</h3>
                <p> {{ modalDetails.plate }} </p>
            </div>
            <div class="column-data">
                <h3>Cor</h3>
                <p> {{ modalDetails.color }} </p>
            </div>
        </div>
        <div class="column">
            <div class="column-data">
                <h3>Ano</h3>
                <p> {{ modalDetails.year }} </p>
            </div>
            <div class="column-data">
                <h3>Concessionária</h3>
                <p> {{ modalDetails.conc }} </p>
            </div>
        </div>
    </div>
    <div class="button-box">
        <button @click="closeModal">Confirmar</button>
    </div>
  </div>
</template>

<script>
export default {
    name: "Modal",

    methods: {
        closeModal() {
            this.$emit("closeModal");
        },
    },

    props: {
        modalDetails: {
            required: true
        }
    }
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
    width: 40%;
    border: none;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 0 1px 1100px hsla(0, 0%, 4%, 0.8)
}

.title {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 2rem;
}

.icon {
    position: absolute;
    right: 1rem;
    cursor: pointer;
}

h2 {
    font-size: 1.8rem;
    color: rgba(0, 0, 0, .8);
}

h3 {
    font-size: 1rem;
    color: rgba(0, 0, 0, .8);
}

.modal-details {
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    border: 1px solid #838181;
    border-radius: 5px;
}

.column-data {
    margin: 1rem 0;
}

.button-box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
}

button {
    padding: .80rem 2rem;
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