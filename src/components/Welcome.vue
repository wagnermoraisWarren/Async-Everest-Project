<template>
  <section class="welcome">
    <h2>Bem vindo(a)! O que deseja visitar?</h2>
    <div class="nav-box">
        <ul>
            <li>
                <router-link to="/register">
                   <button>Cadastar Carro</button>
                </router-link>
            </li>
            <li>
                <router-link to="/carlist">
                    <button>Listar Carro</button>
                </router-link>
            </li>
        </ul>
    </div>
  </section>
</template>

<script>
export default {
    name: "Welcome"
}
</script>

<style>
    .welcome {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        background-image: linear-gradient(to right, rgb(0, 0, 0, .6), rgba(0, 0, 0, .6)), url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80');
        background-size: cover;
        background-position: left center;
        background-repeat: no-repeat;
        height: 88dvh;
        width: 100%;
    }

    h2 {
        text-align: center;
    }

    .nav-box {
        margin-top: 2rem;
    }

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5rem;
    }

    button {
        padding: 1rem 2rem;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: 700;
        background: var(--main-magenta);
        color: #fff;
        cursor: pointer;
        transition: 200ms;
    }

    button:hover {
        background: #bb0e36;
    }
</style>