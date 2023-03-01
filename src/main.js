import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMask from 'v-mask'
import { createServer, Model } from 'miragejs'

Vue.config.productionTip = false
Vue.use(VueMask);


createServer ({

  models: {
    car: Model
  },

  seeds(server) {
    server.create("car", { plate: "IYL-3973", model: "Ka", color: "Branco", year: "2018", conc: "Ford" });
    // server.create("car", { plate: "IYN-3997", model: "Onix", color: "Laranja", year: "2022", conc: "Chevrolet" })
    // server.create("car", { plate: "IWK-3369", model: "Civic", color: "Preto", year: "2019", conc: "Honda" })
  },

  routes() {
    this.namespace = 'api'
    
    this.get('/list', (schema) => {
      return schema.cars.all()
    }, { timing: 1000 } );

    this.post('/list', (schema, request) => {
      let car = JSON.parse(request.requestBody)
      return schema.cars.create(car)
    })

    this.get('/list/:id', (schema, request) => {
      let data = JSON.parse(request.requestBody)
      let id = request.params.id
      let car = schema.cars.find(id)

      return car.update(data)
    }, { timing: 2000 })
  }
})

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowLeft, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faPenToSquare, faTrash, faArrowLeft)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
