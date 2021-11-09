<template>
    <div class="uk-flex uk-flex-center container" >
        <div class="uk-card uk-card-default uk-padding-remove uk-card-large uk-card-body uk-width-1-3@s" style="padding: 40px 20px !important; min-width: 400px">
            <div class="uk-margin">
                <input class="uk-input uk-form-width-medium" type="text" style="width: 80%" placeholder="Email">
            </div>
            <div class="uk-margin">
                <input class="uk-input uk-form-width-medium" type="text" style="width: 80%" placeholder="Contraseña">
            </div>
            <div class="uk-margin">
                <label class="terms uk-text-light"><input style="margin-right: 5px" class="uk-checkbox" type="checkbox" checked>Guardar contraseña</label>
            </div>
            <button class="uk-button uk-button-green" @click="go">Enviar</button>
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

<style scoped>
@media screen and (max-width: 639px){
.container{
    height: 70vh;
}
.uk-card-body{
    min-width: 100px !important;
    box-shadow: 0px 1.5px 1px #000 !important;
}
}
.terms{
    width: 78%;
    display: block;
    text-align: initial;
    margin: 0px auto;
}

</style>