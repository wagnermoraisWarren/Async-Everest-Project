<template>
  <section class="welcome">
    <h2>Bem vindo(a)! O que deseja visitar?</h2>
    <div class="nav-box">
        <ul>
            <li>
                <router-link to="/register">
                    <a href="">Cadastrar um carro</a>
                </router-link>
            </li>
            <li>
                <a href="">Editar carro listado</a>
            </li>
            <li>
                <a href="">Listar carros cadastrados</a>
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
    }

    .nav-box {
        margin-top: 2rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    a {
        color: rgba(0, 0, 0, .8);
        font-size: 1.1rem;
        font-weight: 500;
        transition: 150ms;
    }

    a:hover {
        letter-spacing: 1px;
        color: var(--main-magenta);
    }
</style>