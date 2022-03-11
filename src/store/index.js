import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6,rating: 5, cash: 200, plane: 'Avianca', scales: 4, hour:'12:30'},
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 3, rating: 4, cash: 200.00, plane: 'Avianca', scales: 4, hour:'12:30'},
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3, rating: 4.5, cash: 200.00, plane: 'Avianca', scales: 4, hour:'12:30'},
        { title: 'Pre-fab homes 2', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4, rating: 3, cash: 200.00, plane: 'Avianca', scales: 4, hour:'12:30'},
        { title: 'Favorite road trips 2', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4, rating: 4, cash: 200.00, plane: 'Avianca', scales: 4, hour:'12:30'},
        { title: 'Best airlines 2', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4, rating: 5, cash: 200.00, plane: 'Avianca', scales: 4, hour:'12:30'},
      ],
  },
});