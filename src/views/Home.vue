<template>
  <div class="home">
    <Header />
    <Welcome />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Welcome from '../components/Welcome.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Welcome
  }
}
</script>

<style scoped>
.home {
  height: 100vh;
}
</style>