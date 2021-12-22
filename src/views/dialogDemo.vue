<template>
  <div class="demoContent">
    <h3>引入组件方式</h3>
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
  <div class="demoContent">
    <h3>render函数方式</h3>
    <Button theme="primary" @click="open">dialog</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Dialog from "@components/dialog.vue";
import Button from "@components/button.vue";
import { openDialog } from "@utils/openDialog";
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
    const open = ()=>{
      openDialog({
        title:'标题',
        content: '内容区域',
        ok: handleOk,
        cancel: handleCancel
      })
    }
    return {
      visible,
      handleCancel,
      handleOk,
      confirmLoading,
      open
    };
  },
});
</script>

<style scoped>
.demoContent {
    margin: 40px 20px;
}
</style>
