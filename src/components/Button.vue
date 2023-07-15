<script>

  export default {
    name: 'Button',
    props: {
      msg: {
        type: String,
        default: 'This is a button from component'
      },
      bg_color: 'green'
    },
    methods: {
      handleClick() {
        this.$emit('btn-click')
      }
    },
  }
</script>

<template>
  <button 
    @click="handleClick()"
    :style="{backgroundColor: bg_color}"
  >
   {{ msg }}
  </button>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/utilities/' as *;
</style>