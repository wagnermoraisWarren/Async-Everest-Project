<template>
    <div class="container">
        <HeaderList />
        <table>
            <tr class="header">
                <th>ID</th>
                <th>Modelo</th>
                <th>Ações</th>
            </tr>
            <tr v-for="car in carData" :key=car.id>
                <td>
                    {{ car.id }}
                </td>
                <td>
                    {{ car.model }}
                </td>
                <td>
                    <div class="button-box">
                        <button>
                            <font-awesome-icon icon="fa-solid fa-circle-info" @click="openModal(car)" />
                        </button>
                        <button>
                            <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                        </button>
                        <button>
                            <font-awesome-icon icon="fa-solid fa-trash" @click="deleteCar()"/>
                        </button>
                    </div>
                </td>
            </tr>
        </table>
        <div class="back-button">
            <router-link to="/">
                <button>
                    Inicio
                </button>
            </router-link>
        </div>
        <Modal v-show="isModal" @closeModal="isModal = false" :carData="currentCar" />
    </div>
</template>

<script>
import axios from "axios"
import Modal from "./Modal.vue";
import HeaderList from "@/components/HeaderList.vue"
export default {
    name: "Lista",

    data() {
        return {
            carData: {},
            currentCar: {},
            isModal: false
        };
    },

    methods: {
        async getCars() {
            try {
                const response = await axios.get("http://localhost:8080/api/list");
                this.carData = response.data.cars;
                console.log(response);
            } catch {
                console.log('teste');
            }
        },

        async deleteCar() {
            try {

            } catch {
                console.log('erro');
            }
        },

        openModal(detail) {
            this.isModal = true;
            this.currentCar = detail;
        }
    },

    mounted() {
        this.getCars();
    },

    components: {
        HeaderList,
        Modal
    },
}
</script>

<style scoped>
.container {
    background: dod;
}

table {
    margin: 5% auto;
    width: 90%;
    padding: 1rem;
}

th,
tr,
td {
    background: var(--main-magenta);
    color: #fff;
    font-weight: 700;
}

th {
    width: 33%;
    padding: 1rem;
    text-transform: uppercase;
}

tr {
    padding: 1rem;
    width: 26.6%;
    background: rgb(237, 237, 237);
    box-shadow: 1px 2px 3px rgba(0, 0, 0, .4);
    text-transform: uppercase;
    letter-spacing: 1px;
}

td {
    padding: 1rem;
    transition: 450ms;
}

td:hover {
    background: #e96982;
}

.button-box {
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    gap: .50rem;
}

.button-box button {
    padding: .50rem 1rem;
    border: none;
    border-radius: 5px;
    background: #141414cc;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    transition: 200ms;
}

.button-box button:hover,
.back-button button:hover {
    background: #5a5151;
}

.back-button {
    display: flex;
    align-items: center;
    justify-content: center;
}

.back-button button {
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    background: #141414cc;
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: 200ms;
}
</style>