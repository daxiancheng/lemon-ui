<template>
  <div style="color: #37474f; margin-left: 20px">
    <h2>Dialog 组件示例</h2>
    <div class="ButtonBox">
      <div>
        <div style="padding: 12px; font-size: 14px">常规用法</div>
        <div class="buttonContent" style="justify-content: flex-start">
          <Dialog :visible="visible" @ok="handleOk" @cancel="handleCancel">
            <template v-slot:title>
              <h1>标题</h1>
            </template>
            <template v-slot:content>
              <p>内容区域</p>
            </template>
          </Dialog>
          <Button theme="primary" @click="visible = true">dialog</Button>
        </div>
        <div style="padding: 12px; font-size: 12px">
          <Button style="font-size: 12px" @click="code1 = !code1"
            >查看代码</Button
          >
        </div>
        <div class="sourceContent" v-show="code1">
          <pre>
            {{ dialog1 }}
          </pre>
        </div>
      </div>
    </div>
    <div class="ButtonBox">
      <div>
        <div style="padding: 12px; font-size: 14px">render函数渲染</div>
        <div class="buttonContent" style="justify-content: flex-start">
          <Button theme="primary" @click="open">dialog</Button>
        </div>
        <div style="padding: 12px; font-size: 12px">
          <Button style="font-size: 12px" @click="code2 = !code2"
            >查看代码</Button
          >
        </div>
        <div class="sourceContent" v-show="code2">
          <pre>
            {{ dialog2 }}
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Dialog from "@components/dialog.vue";
import Button from "@components/button.vue";
import { openDialog } from "@utils/openDialog";
import { dialog1, dialog2 } from "./codesource/dialog";
export default defineComponent({
  components: {
    Dialog,
    Button,
  },
  setup() {
    const visible = ref(false);
    const code1 = ref(true);
    const code2 = ref(false);
    const handleOk = () => {
      console.log("确认提交");
      handleCancel();
    };
    const handleCancel = () => {
      console.log("关闭");
      visible.value = false;
    };
    const open = () => {
      openDialog({
        title: "标题",
        content: "内容区域",
        ok: handleOk,
        cancel: handleCancel,
      });
    };
    return {
      visible,
      handleCancel,
      handleOk,
      open,
      dialog1,
      code1,
      code2,
      dialog2,
    };
  },
});
</script>

<style scoped>
.demoContent {
  margin: 40px 20px;
}
</style>
