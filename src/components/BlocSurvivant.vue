<template>
<div class="box bloc_survivant">
  <div class="media">
    <figure class="media-left">
      <span class="image is-128x128">
        <img :src="imgSurvivant"> 
      </span>
    </figure>
    <div class="media-content">
      <div class="content">
        <strong>{{survivant.nom}}</strong>
        <div class="membres">
           <Membre v-for="membre in survivant.membres" :key="membre.id" :membre="membre"/>
        </div>
      
      </div>
    </div>
    <div class="media-right">
      <button class="delete"></button>
    </div>
  </div>
</div>
</template>


<script>
import Membre from "@/components/Membre.vue";

export default {
  name: "BlocSurvivant",
  components: {
    Membre
  },
  props: {
    survivant: Object
  },
  computed: {
    imgSurvivant() {
      return require("../assets/min/" + this.survivant.img_min);
    }
  }
};
</script>

<style lang="less">
.bloc_survivant {
  background-color: darkgray;
}
.media-left {
  .image {
    overflow: hidden;
  }
}
.membres {
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
}
</style>



