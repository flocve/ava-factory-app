<template>
<nav class="navbar is-primary">
  <div class="navbar-brand">
    <router-link to="/" class="navbar-item">
        Ava Factory
      </router-link>
  </div>

  <div id="navMenuColorprimary-example" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">
        Home
      </router-link>
      <router-link to="/about" class="navbar-item">
        About
      </router-link>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Admin
        </a>
        <div class="navbar-dropdown">
          <router-link to="/createSurvivant" class="navbar-item">
            Nouveau survivant
          </router-link>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>


<script>
export default {
  name: "Header"
};
</script>


