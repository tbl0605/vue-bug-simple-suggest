<template>
  <div id="app" class="text-center">
    <div id="nav">
      <router-link to="/" active-class="text-success font-weight-bolder" exact
        >Home</router-link
      >|
      <router-link
        to="/about"
        active-class="text-success font-weight-bolder"
        exact
        >About</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<script>
import 'bootstrap';
export default {};
</script>

<style></style>

<style lang="scss">
@import 'bootstrap/scss/bootstrap.scss';
@import 'bootstrap-vue/src/index.scss';
</style>
