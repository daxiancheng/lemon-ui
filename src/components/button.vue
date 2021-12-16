<template>
  <button :class="[classTheme, sizeTheme]">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    theme: {
      type: String,
      default:  'normal'
    },
    size: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { theme, size } = props
    const classTheme = computed(()=>{
      return 'lemon-theme-' + theme
    })
    const sizeTheme = computed(()=>{
      return 'lemon-size-' + size
    })
    return {
      classTheme,
      sizeTheme
    }
  },
})
</script>

<style scoped>
 button {
   outline: none;
   border: none;
   border-radius: 4px;
   color: #2c3e50;
 }
 .lemon-theme-normal {
   /* background-color: rgb(209, 195, 65); */
   border: 1px solid #ddd;
   color: rgb(209, 195, 65);
   background-color: transparent;
 }
 .lemon-theme-primary {
   background-color: rgb(209, 195, 65);
   color: #fff;
 }
 .lemon-theme-danger {
   background-color: red;
   color: #fff;
 }
 .lemon-size-normal {
   padding: 0.4em 1em;
 }
 .lemon-size-large {
   padding: 0.6em 1.4em;
 }
 .lemon-size-small {
   padding: 0.4em 0.6em;
 }
</style>
