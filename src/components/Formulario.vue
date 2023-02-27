<template>
  <div>
    <Header />
    <div class="flex">
      <!-- <Background /> -->
      <div class="form-box">
        <div class="title-box">
          <h1>Cadastrar carro</h1>
        </div>
        <form action="#">
          <div class="input-box">
            <label for="plate">Placa do Carro</label>
            <input type="text" class="plate" v-model="plate" v-mask="'AAA-####'">
          </div>
          <div class="input-box">
            <label for="model">Modelo</label>
            <input type="text" v-model="model">
          </div>
          <div class="input-box">
            <label for="color">Cor</label>
            <input type="text" v-model="color">
          </div>
          <div class="input-box">
            <label for="year">Ano</label>
            <input type="text" v-model="year">
          </div>
          <div class="select-input-box">
            <label for="conc">Concessionária</label>
            <select name="list" id="conc" v-model="conc">
              <option v-for="car in cars"> {{ car.name }} </option>
            </select>
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue';
import Background from './Background.vue';
export default {
    name: "Formulario",

    data() {
      return {
        plate: "",
        model: "",
        color: "",
        year: "",
        selected: false,
        cars: [
          {
            name: "Ford"
          },

          {
            name: "Chevrolet"
          },

          {
            name: "Volkswagen"
          },

          {
            name: "Toyota"
          },

          {
            name: "Hyundai"
          },

          {
            name: "Jeep"
          },

          {
            name: "BMW"
          },

          {
            name: "Mercedes"
          },
        ]
      };
    },

    components: {
      Header,
      Background
    }
  }
</script>

<style>
  .flex {
    display: flex;
  }

  .title-box {
    margin-bottom: 2rem;
    color: rgba(0, 0, 0, .8);
  }

  .form-box {
    margin: 2rem auto;
    padding: 1rem 2rem;
    position: relative;
  }

  .select-input-box {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
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

  label {
    font-weight: 700;
    color: rgba(0, 0, 0, .7);
  }

  input {
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
    background: #f5f5f5;
  }

  select {
    padding: .20rem 1rem;
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
    transition: 400ms;
  }

  button:hover {
    background: #5a5151;
    padding: .80rem 3rem;
  }
</style>