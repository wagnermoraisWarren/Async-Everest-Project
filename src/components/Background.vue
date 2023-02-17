<template>
  <section class="background"></section>
</template>

<script>
export default {
  name: "Background"
}
</script>

<style scoped>
.background {
    height: 88vh;
    width: 40%;
    background-image: url('https://images.unsplash.com/photo-1517579351329-f1897f2a953b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80');
    /* https://images.unsplash.com/photo-1524600811065-a9f0b8d6aa1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 */

    background-position: center;
    background-size: cover;
    box-shadow: 1px 2px 10px rgba(0, 0, 0, .4);
}
</style>