<template>
  <nav class="uk-navbar uk-navbar-container uk-margin">
    <div class="uk-navbar-left">
        <a class="uk-navbar-toggle" style="min-height: 60px !important" uk-navbar-toggle-icon uk-toggle="target: #offcanvas-overlay" href="#"></a>
        <h4 class="uk-margin-remove">{{this.current}}</h4>
<div id="offcanvas-overlay" uk-offcanvas="overlay: true">
    <div class="uk-offcanvas-bar uk-padding-remove">

        <div class="info-user">
            <img src="https://cdn-icons-png.flaticon.com/512/236/236831.png" style="width: 35% !important" alt="" srcset="">
            <h4 class="uk-text-light uk-margin-remove" style="margin: 5px 0px !important">Chofer 11</h4>
            <h6 class="uk-tect-light uk-margin-remove">Chofer11@gmail.com</h6>
        </div>
        <ul class="uk-list nav-opt uk-list-divider">
            <li @click="currentPage('board')" >Tablero</li>
            <li @click="currentPage('load')">Cargar / Descargar vehiculo</li>
            <li @click="currentPage('deliveryOrders')">Entrega de Ordenes</li>
            <li @click="currentPage('language')">Seleccione un idioma</li>
            <li @click="currentPage('signOut')">Cerrar sesión</li>
            <li @click="currentPage('version')">Version app</li>
        </ul>
    </div>
</div>
    </div>
</nav>
</template>

<script>
import Uikit from 'uikit'
export default {
data() {
    return {
        current: 'Tablero'
    }
},
methods:{
    currentPage(val) {
        switch (val) {
            case 'board':
                this.current = 'Tablero'
                break;
            case 'load':
                this.current = 'Cargar / Descargar vehiculo'
                break;
            case 'deliveryOrders':
                this.current = 'Entrega de Ordenes'
                break;
            case 'language':
                this.current = 'Seleccione un idioma'
                break;
            case 'signOut':
                this.current = 'Cerrar sesión'
                break;
            case 'version':
                this.current = 'Version app'
                break;
            default:
                break;
        }
        Uikit.offcanvas('#offcanvas-overlay').hide();
    }
}
}
</script>

<style scoped>
*{
    color: #fff
}
li{
    padding: 20px !important;
    color: rgb(0, 0, 0) !important;
    text-align: initial;
    margin: 0px !important;
}
.uk-list-divider>li:nth-child(n+2) {
    padding-top: 10px;
    border-top: 1px solid #e0e0e0
}
.uk-offcanvas-bar{
    background: #fff;
    width: 250px
}
.info-user{
    box-sizing: border-box;
    background: #2a307c;
    padding: 20px;
    width: 100%;
    height: 30%;
}
.uk-navbar-container{
    background: #2a307c;
}
</style>