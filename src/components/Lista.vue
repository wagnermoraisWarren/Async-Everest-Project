<template>
    <div>
        <HeaderList />
        <div class="container">
            <div class="header">
                <div class="title">
                    <div class="car-id">
                        <h3>Id</h3>
                    </div>
                    <div class="car-model">
                        <h3>Modelo</h3>
                    </div>
                </div>
                <div class="act">
                    <h3>Ações</h3>
                </div>
            </div>
            <div class="rows" v-for="car in carData" :key="car.id">
                <div class="car-row">
                    <div class="row">
                        <div>
                           <p> {{ car.id }} </p>
                        </div>
                        <div>
                            <p> {{ car.model }} </p>
                        </div>
                    </div>
                    <div class="button-box">
                        <button>
                            <font-awesome-icon class="fa-2x" icon="fa-solid fa-circle-info" @click="openModal" />
                        </button>
                        <button>
                            <font-awesome-icon class="fa-2x" icon="fa-solid fa-pen-to-square" />
                        </button>
                        <button>
                            <font-awesome-icon class="fa-2x" icon="fa-solid fa-trash" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Modal v-show="isModal" @closeModal="isModal = false" :carData="carData" />
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
                console.log("teste");
            }
        },

        openModal() {
            this.isModal = true;
        }
    },

    // computed: {
    //         data: {
    //                 get() {
    //                     return {
    //                         plate: this.carData.plate,
    //                         model: this.carData.model,
    //                         color: this.carData.color,
    //                         year: this.carData.year,
    //                         conc: this.carData.conc
    //                     }
    //                 }
    //         }
    // },

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
        margin: 2rem auto;
        padding: 1rem;
        width: 90%;
        border: 1px solid #15151557;
        border-radius: 5px;
        z-index: -1;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
        font-size: 1.2rem;
    }

    .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 25%;
    }

    .act {
        padding: 0 3rem;
    }

    .car-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem 1rem;
        margin: 2rem 0;
        background: #ded3d3;
        font-size: 1.1rem;
        border: none;
        border-radius: 5px;
    }

    .row {
        display: flex;
        justify-content: space-between;
        width: 21%;
    }

    p {
        font-weight: 700;
        margin: 0 .25rem;
        text-transform: uppercase;
    }

    .button-box {
        display: flex;
        gap: .50rem;
    }

    button {
        padding: .50rem 1rem;
        border: none;
        border-radius: 5px;
        background: #141414cc;
        color: #fff;
        font-weight: 700;
        cursor: pointer;
        transition: 200ms;
    }

    button:hover {
        background: #5a5151;
    }
</style>