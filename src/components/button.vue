<template>
  <button :class="[classTheme, sizeTheme, {disabled}]">
    <span v-if="loading" class="lemo-loading"></span>
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
    },
    loading: {
      type:Boolean,
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
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
 }
 .lemon-theme-normal {
   /* background-color: rgb(209, 195, 65); */
   border: 1px solid #ddd;
   color: rgb(209, 195, 65);
   background-color: transparent;
 }
 .lemon-theme-primary {
   background-color: #37474F;
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
 .disabled {
   cursor: not-allowed;
   background-color: #ddd;
   color:#fff;
 }
 .lemo-loading {
   width: 14px;
   height: 14px;
   display: inline-block;
   margin-right: 4px;
   border-radius: 50%;
   border-color: #fff #fff #fff transparent;
   border-width: 2px;
   border-style: solid;
   animation: lemo-load 1s linear infinite;
 }
 .lemon-theme-normal .lemo-loading {
   border-color: rgb(209, 195, 65) rgb(209, 195, 65) rgb(209, 195, 65) transparent;
 }
 @keyframes lemo-load {
   0%{transform: rotate(0deg);}
   100%{transform: rotate(360deg);}
 }
</style>
