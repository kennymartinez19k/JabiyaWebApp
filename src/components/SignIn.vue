<template>
    <div class="uk-flex uk-flex-center">
        <div class="uk-card uk-card-default uk-padding-remove uk-card-large uk-card-body uk-width-1-1@s uk-width-1-2*@m uk-width-1-2*@l" style="padding: 20px !important">
            <h3 class="uk-card-title">Iniciar Seccion</h3>
            <div class="uk-margin">
                <input class="uk-input uk-form-width-medium" type="text" placeholder="Email">
            </div>
            <div class="uk-margin">
                <input class="uk-input uk-form-width-medium" type="text" placeholder="Contraseña">
            </div>
            <button class="uk-button uk-button-primary" @click="go">Enviar</button>
        </div>
    </div>
</template>

<script>
export default {
 
 methods: {
     go () {
      this.$router.push({ name: 'HomeLoadCalendar'}).catch(() => {})

     }
 }
}
</script>

<style>

</style>