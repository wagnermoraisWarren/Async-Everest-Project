<template>
    <div>
        <HeaderList />
        <div class="container">
            <div class="header">
                <div class="id-column">
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
            <div class="rows">
                <div class="car-row">
                    <div class="id-column">
                        <div class="car-number">
                            <p>1</p>
                        </div>
                        <div>
                            <p>Civic</p>
                        </div>
                    </div>
                    <div class="button-box">
                        <button>
                            <font-awesome-icon class="fa-2x" icon="fa-solid fa-pen-to-square" />
                        </button>
                        <button>
                            <font-awesome-icon class="fa-2x" icon="fa-solid fa-trash" />
                        </button>
                    </div>
                </div>
                <div class="car-row">
                    <div class="id-column">
                        <div class="car-number">
                            <p>2</p>
                        </div>
                        <div>
                            <p>Focus</p>
                        </div>
                    </div>
                    <div class="button-box">
                        <button>
                            <font-awesome-icon 
                                class="fa-2x"
                                icon="fa-solid fa-pen-to-square"
                                 />
                        </button>
                        <button>
                            <font-awesome-icon 
                                class="fa-2x" 
                                icon="fa-solid fa-trash"
                                 />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import HeaderList from "@/components/HeaderList.vue"
export default {
    name: "Lista",

    data() {
        return {
            carData: {}
        };
    },

    methods: {
        async getCars() {
            try {
                await axios
                .get("http://localhost:8080/api/list/")
                .then((response) => {
                    this.carData = response.data.cars;
                    console.log(response);
                });
            } catch {
                console.log(err);
            }
        }
    },

    components: {
        HeaderList
    }
}
</script>

<style scoped>
    .container {
        margin: 2rem auto;
        padding: 1rem;
        width: 90%;
        border: 1px solid #15151557;
        border-radius: 5px;
        box-shadow: 2px 3px 5px rgba(0, 0, 0, .8);
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
        font-size: 1.2rem;
    }

    .id-column {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0 1rem;
    }

    .act {
        padding: 0 4rem;
    }

    .car-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem 1rem;
        margin: 2rem 0;
        font-size: 1.1rem;
        background: #daf5eb;
        border: none;
        border-radius: 5px;
        box-shadow: 2px 2px 3px rgba(0, 0, 0, .5);
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