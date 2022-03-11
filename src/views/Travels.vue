<template>
  <v-container class="grey lighten-5">
    <v-card
    class="mx-auto"
  >
    <v-toolbar
      color="#024F77"
      dark
    >
      <v-toolbar-title><v-icon  class="mr-2"> flight </v-icon>Vuelos encontrados</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon text :to="{ name: 'Home' }" exact>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container fluid >
      <v-row dense class="grey lighten-5">
        <v-col
          v-show="loading"
          v-for="card in cards"
          :key="card.title"
          :md="4"
          :cols="12"
        >
        <v-skeleton-loader
          class="mx-auto"
          type="card"
        >
        </v-skeleton-loader>
        </v-col>
        <v-col
          v-show="!loading"
          v-for="(card,i) in cards"
          :key="i"
          :md="card.flex"
          :cols="12"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
            <v-card-text class="text-h6" align="left">
              <v-row dense>
                <v-col md="6" cols="12">
                 <v-icon>attach_money</v-icon> {{card.cash}}
                </v-col>
                <v-col md="6" cols="12">
                  <v-icon>flight</v-icon> {{card.plane}}
                </v-col>
                <v-col md="6" cols="12">
                  <v-icon>confirmation_number</v-icon> # Escalas {{card.scales}}
                </v-col>
                <v-col md="6" cols="12">
                   <v-icon>schedule</v-icon>{{card.hour}}
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
               <v-rating
                  v-model="card.rating"
                  color="yellow darken-3"
                  background-color="grey darken-1"
                  empty-icon="$ratingFull"
                  half-increments
                  readonly
                ></v-rating>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Travels',
  data: () => ({
      loading: true,
      cards: [],
    }),
  mounted() {
    this.cards = this.$store.state.cards
    this.load()
  },
  methods: {
    load () {
      setTimeout(() => this.loading = false, 1500);
    },
  },
};
</script>
