<template>
  <div id="nav">

  </div>
  <router-view class="view"/>
  <div class="footer">

  </div>
  
</template>
<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
.uk-button-green{
  background: #188c72;
  color: #fff;
}
.view{
  height: 85vh;
}
html body{
  height: 100vh;
  padding: 0;
  margin: 0;

}
.footer{
  padding: 30px;
  background: #188c72;
  position: relative;
  bottom: 0px;

}
#nav {
  padding: 10px;
 

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
