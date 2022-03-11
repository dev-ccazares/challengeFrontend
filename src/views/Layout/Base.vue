<template>
  <v-app>
    <v-main>
      <v-row  dense>
        <v-col cols="12" >
          <img
            class="ml-md-15 ml-5"
            align="left" 
            alt="Logo Polimundo"
            src="@/assets/polimundo.png"
            height="80px"
          />
        </v-col>
      </v-row>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>

export default {
  name: 'Base',
  data () {
    return {
          
    }
  }
};
</script>
