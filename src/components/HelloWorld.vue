<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ count }}</h1>
    <button class="button is-success" @click="increment">+</button>
    <button class="button is-warning" @click="decrement">-</button>
</div>
</template>


<script>
import gql from "graphql-tag";
import store from "../store";

export default {
  name: "HelloWorld",
  data: function() {
    return {
      survivants: ""
    };
  },
  computed: {
    count() {
      return store.state.count;
    }
  },
  methods: {
    increment() {
      store.commit("increment");
    },
    decrement() {
      store.commit("decrement");
    }
  },

  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
