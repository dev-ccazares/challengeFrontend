<template>
<v-container class="grey lighten-5">
  <v-row  align="center" dense>
    <v-col md="8" lg="12" xl="12" cols="12" offset-md="2" offset-lg="0" offset-xl="0">
    <v-card
      color="#024F77"
      dark
    >
    <v-card-title class="text-h5">
      <v-icon large class="mr-2"> search </v-icon>Busca tu vuelo
    </v-card-title>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-row  class="mx-4 mb-1" align="center" >
        <v-col md="2" cols="12">
          <v-autocomplete
            v-model="originCity"
            :items="states"
            menu-props="auto"
            dense
            clearable
            label="Ciudad Origen"
            prepend-icon="pin_drop"
            :rules="[v => !!v || 'Campo requerido']"
            required
          ></v-autocomplete>
        </v-col>
        <v-col md="2" cols="12">
          <v-autocomplete
            v-model="destinationCity"
            :items="states"
            menu-props="auto"
            dense
            clearable
            label="Ciudad Destino"
            prepend-icon="flight"
            :rules="[v => !!v || 'Campo requerido']"
            required
          ></v-autocomplete>
        </v-col>
        <v-col md="2" cols="12">
          <v-dialog
          ref="departureDialog"
          v-model="departureModal"
          :return-value.sync="departureDate"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="departureDate"
              label="Fecha de Salida"
              prepend-icon="today"
              readonly
              v-bind="attrs"
              v-on="on"
              :rules="[v => !!v || 'Campo requerido']"
              required
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="departureDate"
            scrollable
            color="#024F77"
            locale="es-es"
            :min="today"
            :first-day-of-week="1"
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="#024F77"
              @click="departureModal = false"
            >
              Cancelar
            </v-btn>
            <v-btn
              text
              color="#024F77"
              @click="$refs.departureDialog.save(departureDate)"
            >
              Aceptar
            </v-btn>
          </v-date-picker>
          </v-dialog>
        </v-col>
        <v-col md="2" cols="12">
          <v-dialog
          ref="returDialog"
          v-model="returnModal"
          :return-value.sync="returnDate"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="returnDate"
              label="Fecha de Retorno"
              prepend-icon="event"
              readonly
              v-bind="attrs"
              v-on="on"
              :rules="[v => !!v || 'Campo requerido']"
              required
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="returnDate"
            scrollable
            color="#024F77"
            locale="es-es"
            :min="departureDate"
            :first-day-of-week="1"
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="#024F77"
              @click="returnModal = false"
            >
              Cancelar
            </v-btn>
            <v-btn
              text
              color="#024F77"
              @click="$refs.returDialog.save(returnDate)"
            >
              Aceptar
            </v-btn>
          </v-date-picker>
          </v-dialog>
        </v-col>
        <v-col md="2" cols="12">
          <v-btn
            :disabled="!valid"
            color="#F89939"
            class="mr-4 white--text"
            @click="validate"
          >
          <v-icon left>
            search
          </v-icon>
            Buscar
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
    </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>

export default {
  name: 'Home',
  data () {
      return {
        valid: true,
        today: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        departureDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        returnDate: null,
        departureModal: false,
        returnModal: false,
        originCity: null,
        destinationCity: null,
        states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
        ],
      }
    },

  methods: {
    validate () {
      if(this.$refs.form.validate()){
        var search = {
          originCity: this.originCity,
          destinationCity: this.destinationCity,
          departureDate: this.departureDate,
          returnDate: this.returnDate
        } 
         console.log(search)
        this.$router.push('travels');
      }
     
    },
  },
};
</script>
