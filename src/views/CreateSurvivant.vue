<template>
    <div>
        <h1 class="title">Création d'un survivant</h1>
        <form class="section">
          <div class="box columns"> 
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

              <b-field class="column is-half" label="Nom">
                  <b-input v-model="survivant.nom"></b-input>
              </b-field>

              <b-field class="column is-half" label="Cout">
                  <b-select placeholder="Cout" v-model="survivant.cout">
                      <option v-for="cout in coutOptions" :key="cout" :value="cout"  >{{cout}}</option>
                  </b-select>
              </b-field>
              
              <FormMembre v-for="(value, key) in survivant.membres" :membre="value" :key="key"/>
          </div>
           <div class="columns box">{{survivant}}</div>
           <div class="columns box">
             <button @click="submit" class="button is-primary">
                    <span>Valider</span>
                    <b-icon icon="check"></b-icon>
                </button>
           </div>
        </form>
        
        
    </div>
</template>

<script>
import gql from "graphql-tag";
import FormMembre from "@/components/FormMembre.vue";
import { CREATE_SURVIVANT_MUTATION } from "../constants/graphql";

export default {
  name: "createSurvivant",
  components: { FormMembre },
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
  },
  apollo: {
    factions: gql`
      {
        factions {
          id
          nom
        }
      }
    `
  }
};
</script>
