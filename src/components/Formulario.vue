<template>
  <div>
    <HeaderList />
    <div class="flex">
      <div class="form-box">
        <div class="title-box">
          <h1>Cadastrar carro</h1>
        </div>
        <form action="#">

          <!-- <p>Antes de cadastrar o veículo, informe.</p>
          <div class="radio-box">
            <div class="new">
              <input 
                type="radio"
                name="inputR" 
                id="newPlate" 
                v-model="newPlate"
              >
              <label for="newPlate">Placa modelo novo (AAA1A11)</label>
            </div>
            <div class="old">
              <input 
                type="radio" 
                name="inputR" 
                id="oldPlate" 
                v-model="oldPlate"
              >
              <label for="oldPlate">Placa modelo antigo (AAA-1111)</label>
            </div>
          </div>
          <div class="radio-box">

          </div> -->
          <div class="input-box">
            <label for="plate">Placa do Carro</label>
            <input type="text" class="plate" v-model="carData.plate" v-mask="'AAA-###'">
          </div>
          <!-- <div class="input-box" v-show="oldPlate = true">
            <label for="plate">Placa do Carro</label>
            <input type="text" class="plate" v-model="carData.plate" v-mask="'AAA-####'" placeholder="placa antiga">
          </div> -->
          <div class="input-box">
            <label for="model">Modelo</label>
            <input type="text" v-model="carData.model">
          </div>
          <div class="input-box">
            <label for="color">Cor</label>
            <input type="text" v-model="carData.color">
          </div>
          <div class="input-box">
            <label for="year">Ano</label>
            <input type="text" v-model="carData.year">
          </div>
          <div class="select-input-box">
            <label for="conc">Concessionária</label>
            <select name="list" id="conc" v-model="carData.conc">
              <option v-for="car in cars" :key="car.id"> {{ car.name }} </option>
            </select>
          </div>
          <button type="submit" @click.prevent="postCar()">Cadastrar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeaderList from './HeaderList.vue';
export default {
    name: "Formulario",

    data() {
      return { 
        carData: {
          plate: "",
          model: "",
          color: "",
          year: "",
          conc: ""
        },
        cars: [
          {
            id: 1,
            name: "Ford"
          },

          {
            id: 2,
            name: "Chevrolet"
          },

          { id: 3,
            name: "Volkswagen"
          },

          {
            id: 4,
            name: "Toyota"
          },

          {
            id: 5,
            name: "Hyundai"
          },

          {
            id: 6,
            name: "Jeep"
          },

          {
            id: 7,
            name: "BMW"
          },

          {
            id: 8,
            name: "Mercedes"
          },
        ],
        // newPlate: false,
        // oldPlate: false,
      };
    },

    methods: {
      postCar() {
        try {
          axios
          .post("/api/list", this.carData)
          .then(() => {
            this.carData.plate = ""
            this.carData.model = ""
            this.carData.color = ""
            this.carData.year = ""
            this.carData.conc = ""
            console.log("Carro cadastrado com sucesso!");
          })
        } catch {
            console.log("teste");
        }
      }
    },

    components: {
      HeaderList
    }
}
</script>

<style scoped>
  .flex {
    display: flex;
  }

  .title-box {
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, .8);
  }

  .form-box {
    margin: 2rem auto;
    padding: 1rem 2rem;
    position: relative;
  }
  
  .radio-box {
    display: flex;
    flex-direction: column;
    align-self: left;
    gap: 1rem;
    padding: .50rem;
  }

  .old,
  .new {
    display: flex;
    align-items: center;
    gap: .50rem;
  }

  .input-box {
    width: 100%;
  }

  .select-input-box {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
    width: 100%;
    margin-bottom: 2rem;
    background: #3f3f3f;
    border: none;
    border-radius: 5px;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, .8);
    color: #fff;
  }

  .select-input-box label {
    color: #fff;
  }

  .plate {
    text-transform: uppercase;
  }

  .input-box label {
    font-weight: 700;
    color: rgba(0, 0, 0, .7);
  }

  .input-box input {
    display: flex;
    width: 100%;
    padding: .50rem;
    margin-bottom: 2rem;
    font-size: 1.1rem;
    border: 1px solid #2524248a;
    border-radius: 2px;
    letter-spacing: 1px;
    outline: none;
    transition: 200ms;
  }

  input:hover {
    background: #f0e1e1;
  }

  select {
    padding: .20rem 2rem;
    background: #f5f5f5;
    font-size: .90rem;
    outline: none;
  }

  button {
    padding: .80rem 2rem;
    border: none;
    border-radius: 5px;
    background: #151515;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    transition: 200ms;
  }

  button:hover {
    background: #342b2b;
    padding: .80rem 3rem;
  }
</style>