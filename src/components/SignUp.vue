<template>
    <div class="uk-flex uk-flex-center container" >
        <div class="uk-card uk-card-default uk-padding-remove uk-card-large uk-card-body uk-width-1-3@s" style="padding: 40px 20px !important; min-width: 400px">
            <div class="uk-margin">
                <input class="uk-input uk-form-width-medium" type="text" style="width: 80%" placeholder="Nombre">
            </div>
            <div class="uk-margin">
                <input class="uk-input uk-form-width-medium" type="email" style="width: 80%" placeholder="Email">
            </div>
            <div class="uk-margin">
                <input class="uk-input uk-form-width-medium" type="password" style="width: 80%" placeholder="Contraseña">
            </div>
            <div class="uk-margin">
                <label class="terms uk-text-light"><input style="margin-right: 5px" class="uk-checkbox" type="checkbox" checked>Aceptar terminos y condiciones</label>
            </div>
            
            <button class="uk-button uk-button-green uk-text-white">Enviar</button>
        </div>
    </div>
</template>

<script>
export default {

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