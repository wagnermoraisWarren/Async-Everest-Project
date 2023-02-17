<template>
  <div class="home">
    <Header />
    <div class="flex">
      <Background />
      <Welcome />
    </div>

  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Background from '../components/Background.vue';
import Formulario from '../components/Formulario.vue';
import Welcome from '../components/Welcome.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Background,
    Formulario,
    Welcome
  }
}
</script>

<style scoped>
  .flex {
    display: flex;
  }
</style>