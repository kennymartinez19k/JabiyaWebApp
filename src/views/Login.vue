<template>
  <div>
    <a @click="login('signIn')">Inicia Sección</a> |
    <a @click="login(signUp)">Registrate</a>
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

<style>

</style>