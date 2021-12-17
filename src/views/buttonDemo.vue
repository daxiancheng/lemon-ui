<template>
  <div class="buttonContent">
    <Button>按钮</Button>
    <Button theme="primary">按钮</Button>
    <Button theme="danger">按钮</Button>
    <Button :disabled="true">按钮</Button>
  </div>
  <div class="buttonContent">
    <Button theme="primary">按钮</Button>
    <Button theme="primary" size="large">按钮</Button>
    <Button theme="primary" size="small">按钮</Button>
  </div>
  <div class="buttonContent">
    <Button :loading="true">按钮</Button>
    <Button theme="primary" :loading="true">按钮</Button>
    <Button theme="danger" :loading="true">按钮</Button>
  </div>
</template>

<script lang="ts">
import Button from "@components/button.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Button,
  },
  setup() {},
});
</script>

<style scoped>
.buttonContent {
    width: 250px;
    /* border:  1px solid; */
    display: flex;
    justify-content: space-between;
    margin: 20px;
    align-items: center;
}
</style>
