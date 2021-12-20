<template>
  <div class="demoContent">
      <Dialog
    :visible="visible"
    :confirm-loading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <template v-slot:title>
      <h1>标题</h1>
    </template>
    <template v-slot:content>
      <p>内容区域</p>
    </template>
  </Dialog>
  <Button theme="primary" @click="visible = true">dialog</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Dialog from "@components/dialog.vue";
import Button from "@components/button.vue";
export default defineComponent({
  components: {
    Dialog,
    Button,
  },
  setup() {
    let visible = ref(false);
    let confirmLoading = ref(false);
    const handleOk = () => {
      console.log("确认提交");
      handleCancel()
    };
    const handleCancel = () => {
      console.log("关闭");
      visible.value = false;
    };
    return {
      visible,
      handleCancel,
      handleOk,
      confirmLoading,
    };
  },
});
</script>

<style scoped>
.demoContent {
    margin: 20px;
}
</style>
