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
    server.create("car", { plate: "IYL-3973", model: "Civic", color: "Branco", year: "2018", conc: "Ford" });
    server.create("car", { plate: "IYL-3204", model: "Onix", color: "Preto", year: "2020", conc: "Chevrolet" });
    server.create("car", { plate: "IYL-2306", model: "Fox", color: "Vermelho", year: "2012", conc: "Volkswagen" });
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

    this.delete('/list/:id', (schema, request) => {
      let id = request.params.id

      return schema.reminders.find(id).destroy()
    })
  }
})

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowLeft, faCircleInfo, faClose, faPenToSquare, faTrash, faX, faXmark } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faPenToSquare, faTrash, faArrowLeft, faCircleInfo, faClose);

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
