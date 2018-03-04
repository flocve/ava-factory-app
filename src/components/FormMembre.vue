<template> 
<div class="column is-half panel">
     <div class="columns panel-heading">
        <b-select placeholder="Type" v-model="membre.type">
            <option v-for="typeMembre in typesMembres" :key="typeMembre.key" :value="typeMembre.key">{{typeMembre.value}}</option>
        </b-select>
    </div>
    <div class="columns is-multiline panel-block">
        <b-field class="column is-one-third" label="valeur blanc">
            <b-select placeholder="val blanc" v-model="membre.val_blanc">
                <option v-for="n in 10" :key="n" :value="n">{{n}}</option>
            </b-select>
        </b-field>
        <b-field class="column is-one-third" label="valeur bleue">
            <b-select placeholder="val bleue" v-model="membre.val_bleue">
                <option v-for="n in 10" :key="n" :value="n">{{n}}</option>
            </b-select>
        </b-field>
         <b-field class="column is-one-third" label="valeur rouge">
            <b-select placeholder="val rouge" v-model="membre.val_rouge">
                <option v-for="n in 10" :key="n" :value="n">{{n}}</option>
            </b-select>
        </b-field>
        <b-field class="column is-one-third" label="points blanc">
            <b-select placeholder="bullet blanc" v-model="membre.bullet_blanc">
                <option v-for="n in 10" :key="n" :value="n">{{n}}</option>
            </b-select>
        </b-field>
        <b-field class="column is-one-third" label="points bleue">
            <b-select placeholder="bullet blanc" v-model="membre.bullet_bleue">
                <option v-for="n in 10" :key="n" :value="n">{{n}}</option>
            </b-select>
        </b-field>
         <b-field class="column is-one-third" label="points rouge">
            <b-select placeholder="bullet blanc" v-model="membre.bullet_rouge">
                <option v-for="n in 10" :key="n" :value="n">{{n}}</option>
            </b-select>
        </b-field>
    </div>
</div>

</template>


<script>
import { TYPES_MEMBRES } from "../constants/survivantData";

export default {
  name: "FormMembre",

  props: ["membre"],
  data: function() {
    return {
      typesMembres: TYPES_MEMBRES
    };
  }
};
</script>


