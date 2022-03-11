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
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
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
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6,rating: 5, cash: 200, plane: 'Avianca', scales: 4, hour:'12:30'},
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 3, rating: 4, cash: 200.00, plane: 'Avianca', scales: 4, hour:'12:30'},
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3, rating: 4.5, cash: 200.00, plane: 'Avianca', scales: 4, hour:'12:30'},
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4, rating: 3, cash: 200.00, plane: 'Avianca', scales: 4, hour:'12:30'},
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4, rating: 4, cash: 200.00, plane: 'Avianca', scales: 4, hour:'12:30'},
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4, rating: 5, cash: 200.00, plane: 'Avianca', scales: 4, hour:'12:30'},
      ],
    }),
};
</script>
