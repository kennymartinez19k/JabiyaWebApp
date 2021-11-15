<template>
  <div>
    <BackButton/>
    <div  v-for="(load, index) in loads" :key="load">
    <div v-if="loads[index].date < newDate">
        <div  uk-grid class="uk-margin" >
        <div class="uk-card uk-card-default uk-card-small uk-card-body uk-flex uk-width-1" :class="{loadsForToday:newDate === load.date}">
          <div class="uk-flex-wrap-middle uk-width-1-2 position">
            <p class="uk-margin-bottom">{{load.hours}} </p>
             <font-awesome-icon icon="truck"  :class="{iconfaDeliverd:load.State === 'Delivered', iconfaDispatchedApproved:load.State === 'Dispatched Approved', iconfaDispatched:load.State === 'Dispatched', iconfaAssignedToDriver:load.State === 'Assigned to Driver'}"/>
          </div>
          <div class="uk-width-1 uk-text-left">
            <p class="uk-card-title"><b>Estado:</b> {{load.State}}</p>
            <p><b>Numeros de ordene:</b> {{load.OrderNumbers}}</p>
            <p><b>Almacen:</b> {{load.warehouse}} /<b>Bahia:</b> {{load.bay}}</p>
            <p><b>Numeros de Paquete:</b> {{load.packageNumbers}} </p>
            <p><b>Zona destino:</b> {{load.destinationArea}} </p>
             <button class="uk-button uk-button-primary btn">Primary</button>
          </div>
        </div>
       </div>
      </div>
      
     </div>
        <div  v-for="(load, index) in loads" :key="load">
    <div v-if="loads[index].date === newDate">
      <h5 v-if="day"> Hoy</h5>
        <div  uk-grid class="uk-margin" >
        <div class="uk-card uk-card-default uk-card-small uk-card-body uk-flex uk-width-1" :class="{loadsForToday:newDate === load.date}">
          <div class="uk-flex-wrap-middle uk-width-1-2 position">
            <p class="uk-margin-bottom">{{load.hours}} </p>
             <font-awesome-icon icon="truck"  :class="{iconfaDeliverd:load.State === 'Delivered', iconfaDispatchedApproved:load.State === 'Dispatched Approved', iconfaDispatched:load.State === 'Dispatched', iconfaAssignedToDriver:load.State === 'Assigned to Driver'}"/>
          </div>
          <div class="uk-width-1 uk-text-left">
            <p class="uk-card-title"><b>Estado:</b> {{load.State}}</p>
            <p><b>Numeros de ordene:</b> {{load.OrderNumbers}}</p>
            <p><b>Almacen:</b> {{load.warehouse}} /<b>Bahia:</b> {{load.bay}}</p>
            <p><b>Numeros de Paquete:</b> {{load.packageNumbers}} </p>
            <p><b>Zona destino:</b> {{load.destinationArea}} </p>
             <button class="uk-button uk-button-primary btn">Primary</button>
          </div>
        </div>
       </div>
      </div>
      
     </div>
     <div  v-for="(load, index) in loads" :key="load">
      <div v-if="loads[index].date > newDate">
          <div uk-grid class="uk-margin" >
          <div class="uk-card uk-card-default uk-card-small uk-card-body uk-flex uk-width-1" :class="{loadsForToday:newDate === load.date}">
            <div class="uk-flex-wrap-middle uk-width-1-2 position">
              <p class="uk-margin-bottom">{{load.hours}} </p>
              <font-awesome-icon icon="truck"  :class="{iconfaDeliverd:load.State === 'Delivered', iconfaDispatchedApproved:load.State === 'Dispatched Approved', iconfaDispatched:load.State === 'Dispatched', iconfaAssignedToDriver:load.State === 'Assigned to Driver'}"/>
            </div>
            <div class="uk-width-1 uk-text-left">
              <p class="uk-card-title"><b>Estado:</b> {{load.State}}</p>
              <p><b>Numeros de ordene:</b> {{load.OrderNumbers}}</p>
              <p><b>Almacen:</b> {{load.warehouse}} /<b>Bahia:</b> {{load.bay}}</p>
              <p><b>Numeros de Paquete:</b> {{load.packageNumbers}} </p>
              <p><b>Zona destino:</b> {{load.destinationArea}} </p>
              <button class="uk-button uk-button-primary btn">Primary</button>
            </div>
          </div>
        </div>
        </div>
      
     </div>
  </div>
</template>

<script>
import BackButton from '../components/Buttons/BackButton.vue'
import moment from 'moment'
export default {
  components: {
    BackButton,
  },
  data () {
    return {
      newDate: null,
//       State:
// Warehouse / Bay
// Order numbers
// Package Numbers
// Destination area:
// Date hour

// Estado: 
// Almacen   /  Bahia
// Numeros de ordenes 
// Numeros de Paquete
// Zona destino:
// Fecha - hora
      loads: [
       {
          id: 1,
          warehouse: 'ferty',
          bay: 'loder',
          hours: '10:00 - 10:30', 
          State: 'Delivered',
          OrderNumbers: '1234567890d',
          packageNumbers: 2,
          destinationArea: 'lon beach',
          date: '2021-11-10'
       },
        {
          id: 2,
          warehouse: 'ferty',
          bay: 'loder',
          hours: '10:00 - 10:30', 
          State: 'Delivered',
          OrderNumbers: '1234567890d',
          packageNumbers: 2,
          destinationArea: 'lon beach',
          date: '2021-11-11'
       },
        {
          id: 2,
          warehouse: 'ferty',
          bay: 'loder',
          hours: '10:00 - 10:30', 
          State: 'Delivered',
          OrderNumbers: '1234567890d',
          packageNumbers: 2,
          destinationArea: 'lon beach',
          date: '2021-11-11'
       },
       {
          id: 3,
          warehouse: 'ferty',
          bay: 'loder',
          hours: '10:00 - 10:30', 
          State: 'Delivered',
          OrderNumbers: '1234567890d',
          packageNumbers: 2,
          destinationArea: 'lon beach',
          date: '2021-11-10'
       },
       {
          id: 4,
          warehouse: 'ferty',
          bay: 'loder',
          hours: '10:00 - 10:30', 
          State: 'Delivered',
          OrderNumbers: '1234567890d',
          packageNumbers: 2,
          destinationArea: 'lon beach',
          date: '2021-11-12'
       },
       {
          id: 5,
          warehouse: 'ferty',
          bay: 'loder',
          hours: '10:00 - 10:30', 
          State: 'Delivered',
          OrderNumbers: '1234567890d',
          packageNumbers: 2,
          destinationArea: 'lon beach',
          date: '2021-11-11'
       },
       {
          id: 6,
          warehouse: 'ferty',
          bay: 'loder',
          hours: '10:00 - 10:30', 
          State: 'Delivered',
          OrderNumbers: '1234567890d',
          packageNumbers: 2,
          destinationArea: 'lon beach',
          date: '2021-11-12'
       },
       {
          id: 6,
          warehouse: 'ferty',
          bay: 'loder',
          hours: '10:00 - 10:30', 
          State: 'Delivered',
          OrderNumbers: '1234567890d',
          packageNumbers: 2,
          destinationArea: 'lon beach',
          date: '2021-11-13'
       },
       {
          id: 6,
          warehouse: 'luces',
          bay: 'loder',
          hours: '10:00 - 10:30', 
          State: 'Delivered',
          OrderNumbers: '1234567890d',
          packageNumbers: 2,
          destinationArea: 'lon beach',
          date: '2021-11-1'
       },
      ]
    }
  },
  mounted () {
    // this.newDate = 'werthvcx'
    this.newDate = moment(new Date()).format('YYYY-MM-DD')
  }

}
</script>

<style scoped>
div{
  font-size: 13px;
}
p {
    margin: 1px;
}
.iconfaDeliverd {
   font-size: 20px;
   color: rgb(13, 99, 10);
}
.iconfaDispatchedApproved {
   font-size: 20px;
   color: rgb(5, 7, 5);
}
.iconfaDispatched {
   font-size: 20px;
   color: rgb(255, 174, 0);
}
.iconfaAssignedToDriver {
   font-size: 20px;
   color: rgb(203, 207, 203);
}
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 5px;
  border: 2px solid #564caf;
}
.btn {
      position: relative;
    left: 114px;
    top: 0px;
    height: 31px;
    margin-top: 12px;
    border-radius: 25px;
    padding-bottom: 33px;
}
.position {
  position: relative;
  left: 1px;
  top:12px
}
.loadsForToday {
  background-color: rgb(176, 185, 185);
}
</style>>
