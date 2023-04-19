<template>
  <v-app>
    

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import "./css/fonts.css"
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
.weight-500{
  font-weight: 500 !important;
}
</style>