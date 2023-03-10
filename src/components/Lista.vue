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
                            <font-awesome-icon icon="fa-solid fa-trash" @click="deleteCar(car)" v-bind="car"/>
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
        <Modal v-show="isModal" @closeModal="isModal = false" :modalDetails="currentCar" />
    </div>
</template>

<script>
import axios from "axios"
import Modal from "./Modal.vue";
import HeaderList from "@/components/HeaderList.vue";
import carService from "@/services/carService";
export default {
    name: "Lista",

    data() {
        return {
            carData: [],
            currentCar: {},
            isModal: false,
        };
    },

    methods: {
        async getCars() {
            try {
                const response = await carService.get("http://localhost:8080/api/list");
                this.carData = response.data.cars;
                console.log(response);
            } catch (err) {
                console.log(err);
            }
        },

        async deleteCar(car) {
            try {
                await carService.delete(car.id)
            } catch (err) {
                console.log(err);
            } finally {
                this.getCars();
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
    border: 1px solid rgba(0, 0, 0, .4);
    border-radius: 5px;
}

th,
tr,
td {
    background: transparent;
    color: black;
    font-weight: 700;
}

th {
    width: 33%;
    padding: 1rem;
    text-transform: uppercase;
    box-shadow: 1px 2px 2px rgba(0, 0, 0, .4);
}

tr {
    padding: 1rem;
    width: 26.6%;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: 450ms;
}

td {
    padding: 1rem;
    transition: 450ms;
    box-shadow: 1px 2px 2px rgba(0, 0, 0, .4);
}

tr:hover {
    background: #d7cfd1;
}

.button-box {
    display: flex;
    justify-content: center;
    padding: 0 2rem;
    gap: 1rem;
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