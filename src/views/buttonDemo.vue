<template>
  <div style="color: #37474f; margin-left: 20px">
    <h2>Button 组件示例</h2>
    <div class="ButtonBox">
      <div>
        <div style="padding: 12px; font-size: 14px">常规用法</div>
        <div class="buttonContent">
          <Button>按钮</Button>
          <Button theme="primary">按钮</Button>
          <Button theme="danger">按钮</Button>
          <Button :disabled="true">按钮</Button>
        </div>
        <div style="padding: 12px; font-size: 12px">
          <Button style="font-size: 12px">查看代码</Button>
        </div>
        <div style="border-top: 1px solid #ddd; padding: 12px">
          <pre>&lt;Button theme="primary"&gt;按钮&lt;Button/&gt;</pre>
        </div>
      </div>
    </div>
    <div class="ButtonBox">
      <div>
        <div style="padding: 12px; font-size: 14px">Size 类型</div>
        <div class="buttonContent">
          <Button>按钮</Button>
          <Button size="large">按钮</Button>
          <Button size="small">按钮</Button>
        </div>
        <div style="padding: 12px; font-size: 12px">
          <Button style="font-size: 12px">查看代码</Button>
        </div>
        <div style="border-top: 1px solid #ddd; padding: 12px">
          <pre>&lt;Button size="small"&gt;按钮&lt;Button/&gt;</pre>
        </div>
      </div>
    </div>
    <div class="ButtonBox">
      <div>
        <div style="padding: 12px; font-size: 14px">添加 Loading</div>
        <div class="buttonContent">
          <Button :loading="true">按钮</Button>
          <Button theme="primary" :loading="true">按钮</Button>
          <Button theme="danger" :loading="true">按钮</Button>
        </div>
        <div style="padding: 12px; font-size: 12px">
          <Button style="font-size: 12px">查看代码</Button>
        </div>
        <div style="border-top: 1px solid #ddd; padding: 12px">
          <pre>&lt;Button :loading="true"&gt;按钮&lt;Button/&gt;</pre>
        </div>
      </div>
    </div>
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
.ButtonBox {
  border: 1px solid #ddd;
  width: 460px;
  margin-bottom: 20px;
}
.buttonContent {
  width: 100%;
  /* border:  1px solid; */
  display: flex;
  justify-content: space-around;
  padding: 12px;
  align-items: center;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
</style>
