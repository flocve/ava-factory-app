<template>
	<ul>
		<li>{{survivant.nom}}</li>
		<li>{{survivant.cout}}</li>
	</ul>

</template>


<script>
export default {
  name: "BlocSurvivant",
  props: {
    survivant: Object
  }
};
</script>


