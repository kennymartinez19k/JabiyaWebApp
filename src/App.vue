<template>
  <div id="nav">

  </div>
  <router-view class="view"/>
</template>
<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  font-size: 12px;
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
