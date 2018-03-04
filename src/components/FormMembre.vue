<template> 
<div class="column is-half panel">
     <div class="panel-heading">
        <strong>Title</strong>
    </div>
    <div class="panel-block">
        <b-field class="" label="valeur blanc">
            <b-select placeholder="val blanc" v-model="membre.val_blanc">
                <option v-for="n in 10" :key="n" :value="n">{{n}}</option>
            </b-select>
        </b-field>
    </div>
</div>

</template>


<script>
export default {
  name: "FormMembre",

  props: ["membre"]
};
</script>


