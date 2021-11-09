<template>
    <button
        class="uk-button uk-button-secondary uk-margin-top"
        @click="goBack()">
        <span uk-icon="icon: reply"></span><strong></strong>
    </button>
</template>

<script>
export default {
  name: 'BackButton',
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
