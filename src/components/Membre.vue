<template>
    <div class="membre">
        <img :src="imgMembre" class="membre-img image is-16x16"> 
        <b-icon v-for="n in membre.bullet_blanc" :key="'bullet_blanc_' + n"
            class="is-white"
            icon="circle"
            size="is-small">
        </b-icon>
      <b-icon v-for="n in membre.bullet_bleue" :key="'bullet_bleue_' + n"
            class="is-blue"
            icon="circle"
            size="is-small">
        </b-icon>
        <b-icon v-for="n in membre.bullet_rouge" :key="'bullet_rouge_' + n"
            class="is-red"
            icon="circle"
            size="is-small">
        </b-icon>
    </div>
</template>


<script>
import { TYPES_MEMBRES } from "../constants/survivantData";

export default {
  name: "Membre",
  props: {
    membre: Object
  },
  data: function() {
    return {
      typesMembres: TYPES_MEMBRES
    };
  },
  computed: {
    imgMembre() {
      let node = "";
      if (this.membre.type) {
        node = require("../assets/img/membres/" +
          this.typesMembres[this.membre.type].img);
      }
      return node;
    }
  }
};
</script>

<style lang="less">
.membre {
  .is-white {
    color: white;
  }
  .is-blue {
    color: blue;
  }
  .is-red {
    color: red;
  }
  .membre-img {
    display: inline;
  }
}
</style>



