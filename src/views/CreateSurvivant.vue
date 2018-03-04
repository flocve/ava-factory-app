<template>
    <div>
        <h1 class="title">Création d'un survivant</h1>
        <div class="columns">
          <div class="column is-4">
              <BlocSurvivant :survivant="survivant"/>
          </div>
          <div class="column">
            <form>
              <div class="columns"> 
                <b-field class="column is-half">
                    <button @click="addMembre" class="button is-primary">
                        <span>Ajouter un membre</span>
                        <b-icon icon="plus-circle-outline"></b-icon>
                    </button>
                </b-field>
              </div> 
              <div class="box is-multiline columns"> 
                  <b-field class="column is-full" label="Faction">
                      <b-select placeholder="Factions" v-model="survivant.faction">
                          <option v-for="faction in factions" :key="faction.id" :value="faction.id"  >{{faction.nom}}</option>
                      </b-select>
                  </b-field>

                  <b-field class="column is-one-third" label="Nom">
                      <b-input v-model="survivant.nom"></b-input>
                  </b-field>
                  <b-field class="column is-one-third" label="Image min">
                      <b-input v-model="survivant.img_min"></b-input>
                  </b-field>
                  <b-field class="column is-one-third" label="Cout">
                      <b-select placeholder="Cout" v-model="survivant.cout">
                          <option v-for="cout in coutOptions" :key="cout" :value="cout"  >{{cout}}</option>
                      </b-select>
                  </b-field>
                  <FormMembre v-for="(value, key) in survivant.membres" :membre="value" :key="key"/>
              </div>
              <div class="columns box">
                <button @click="submit" class="button is-primary">
                    <span>Valider</span>
                    <b-icon icon="check"></b-icon>
                </button>
              </div>
            </form>
          </div>
        </div>
        
    </div>
</template>

<script>
import FormMembre from "@/components/FormMembre.vue";
import BlocSurvivant from "@/components/BlocSurvivant.vue";
import {
  CREATE_SURVIVANT_MUTATION,
  ALL_FACTIONS_QUERY
} from "../constants/graphql";

export default {
  name: "createSurvivant",
  components: { FormMembre, BlocSurvivant },
  data: function() {
    return {
      coutOptions: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
      survivant: {
        nom: "",
        cout: 0,
        faction: "",
        membres: []
      },
      nbMembres: 0,
      factions: ""
    };
  },
  apollo: {
    factions: {
      query: ALL_FACTIONS_QUERY
    }
  },
  methods: {
    addMembre: function() {
      const membre = {
        val_blanc: 0
      };
      this.survivant.membres.push(membre);
    },
    submit: function() {
      const input = this.survivant;
      this.$apollo.mutate({
        mutation: CREATE_SURVIVANT_MUTATION,
        variables: {
          input
        }
      });
    }
  }
};
</script>
