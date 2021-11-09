<template>
    <!-- <BackButton/> -->

            <div class="uk-card uk-card-default uk-padding-remove uk-card-large uk-card-body uk-width-1-3@s"  style="padding: 0px 20px !important;">
               <h5 class="uk-text-lead uk-padding-remove">Crea una cuenta</h5>
              <p class="">si ya estas registrado, regresa a la pantalla anterio  y uso el boton de iniciar sesion</p>
            <div class="uk-margin">
                <input class="uk-input uk-form-width-medium" type="text" style="width: 80%" placeholder="Primer Nombre">
            </div>
            <div class="uk-margin">
                <input class="uk-input uk-form-width-medium" type="text" style="width: 80%" placeholder="Primer Apellido">
            </div>
            <div class="uk-margin">
                <input class="uk-input uk-form-width-medium" type="email" style="width: 80%" placeholder="Correo Electronico">
            </div>
            <div class="uk-margin">
                <input class="uk-input uk-form-width-medium" type="password" style="width: 80%" placeholder="Contraseña">
            </div>
            <div class="uk-margin">
                <input class="uk-input uk-form-width-medium" type="text" style="width: 80%" placeholder="Numero Telefono">
            </div>
            <div class="uk-margin">
                <input class="uk-input uk-form-width-medium" type="text" style="width: 80%" placeholder="Cual es su Compañia">
            </div>
            <div class="uk-margin">
                <label class="terms uk-text-light"><input style="margin-right: 5px" class="uk-checkbox" type="checkbox" checked>Aceptar terminos y condiciones</label>
            </div>
            
            <button class="uk-button uk-width-1-1 uk-button-green uk-text-white">Registrarse</button>
        </div>
</template>

<script>
// import BackButton from '../components/Buttons/BackButton.vue'

export default {
components: {
    // BackButton,
  }
}
</script>

<style scoped>
@media screen and (max-width: 639px){
.container{
    height: 70vh;
}
.uk-card-body{
    min-width: 100px !important;

}
}
.terms{
    width: 78%;
    display: block;
    text-align: initial;
    margin: 0px auto;
}

</style>