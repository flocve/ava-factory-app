<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="survivant of survivants" :key="survivant.id">
        {{survivant.nom}} - {{survivant.cout}}
      </li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
    data: function(){
      return {
        survivants: ''
      }
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },

  apollo: {
    survivants: gql`{survivants{
      nom,
      cout
    }}`
  }
}
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
