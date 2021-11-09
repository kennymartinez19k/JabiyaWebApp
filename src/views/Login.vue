<template>
  <div class="login">
    <div class="logo-cont">
    <img class="logo" src="../assets/jabilla3.png" alt="">
    <h5 class="title-logo">Javiya</h5>
  </div>  
    <h4 class="uk-flex-inline uk-text-light uk-margin-remove"><a class="uk-link-heading" @click="login('signIn')">Inicia Sección</a></h4> |
    <h4 class="uk-flex-inline uk-text-light uk-margin-remove"><a class="uk-link-heading" @click="login('signUp')">Registrarse</a></h4>
    <sign-in v-if="signIn"/>
    <sign-up v-else/>
   </div>
</template>

<script>
import SignUp from '../components/SignUp.vue'
import SignIn from '../components/SignIn.vue'

export default {
    components:{
      SignIn,
      SignUp
    },
    data() { 
        return {
            signIn: true,
            singUp: false
        }
    },
    methods: {
        login (val) {
            if(val == 'signIn') this.signIn = true
            else this.signIn = false
        }
    }

}
</script>

<style scoped>
.logo-cont{
    
}
.logo{
      max-width: 23%;
    transform: rotate(257deg)
}
.title-logo{
  font-family: 'Cinzel', serif;
  margin: 20px;
  font-size: 25px;
}
</style>