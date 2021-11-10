<template>
  <div>
      <app-header/>
       <div class="uk-background-muted  uk-panel uk-flex uk-flex-around">
              <div class="uk-padding-small">
            <p class="uk-text-middle">Tiempo</p>
           </div>
            <div class="uk-padding-small">
            <p class="uk-text-middle">Estatus</p>
            </div>
        </div>
  </div>
</template>

<script>
import AppHeader from '../views/AppHeader.vue'
export default {
components:{
  AppHeader
}
}
</script>

<style scoped>
p {
    margin: 0px;
}
</style>>
