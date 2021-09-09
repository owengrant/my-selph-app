<template>
  <v-app>
    <v-app-bar app color="black-lighten-2" dark> 
      <span class="headline">
        My Selph 
      </span>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>
