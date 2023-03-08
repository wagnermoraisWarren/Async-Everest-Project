<template>
  <div id="app">
    <transition name="fade" mode="out-in"> <!-- COMPONENTE DE TRANSIÇÃO DE ROUTER -->
      <router-view />
    </transition>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');

  :root {
    --main-magenta: #EE2E5D;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    height: 100vh;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    list-style: none;
    text-decoration: none;
  }

  /*
  Estilização da Transição do router
  */

  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateX(-2em);       
  }

  .fade-enter-active, .fade-leave-active {
    transition: all 200ms ease;
  }
</style>
