<template>
  <div id="app">
    <Header/>
    <router-view class="container"/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style>
.container {
  padding: 20px 0;
}
</style>
