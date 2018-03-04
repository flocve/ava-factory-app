<template>
  <div class="home">

    <div class="columns is-multiline">
      <div v-for="survivant of survivants" :key="survivant.id" class="column is-one-third">
        <BlocSurvivant :survivant="survivant"/>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import BlocSurvivant from "@/components/BlocSurvivant.vue";
import { ALL_SURVIVANTS_QUERY, ALL_FACTIONS_QUERY } from "@/constants/graphql";

export default {
  name: "home",
  components: {
    HelloWorld,
    BlocSurvivant
  },
  data: function() {
    return {
      survivants: ""
    };
  },
  apollo: {
    survivants: {
      query: ALL_SURVIVANTS_QUERY
    }
  }
};
</script>
