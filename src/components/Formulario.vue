<template>
  <div>
    <Header />
    <div class="flex">
      <Background />
      <div class="title-box">
        <h1>Cadastrar carro</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue';
import Background from './Background.vue';
export default {
    name: "Formulario",

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
</style>