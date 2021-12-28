
<template>
  <div style="color: #37474f; margin-left: 20px">
    <h2>Button 组件示例</h2>
    <div class="ButtonBox">
      <div>
        <div style="padding: 12px; font-size: 14px">常规用法</div>
        <div class="buttonContent">
          <Switch v-model:checked="checked"></Switch>
          <Switch v-model:checked="checked1"></Switch>
        </div>
        <div style="padding: 12px; font-size: 12px">
          <Button style="font-size: 12px" @click="code1 = !code1"
            >查看代码</Button
          >
        </div>
        <div style="border-top: 1px solid #ddd; padding: 12px" v-show="code1">
          <pre>
            {{ switch1 }}
          </pre>
        </div>
      </div>
    </div>
    <div class="ButtonBox">
      <div>
        <div style="padding: 12px; font-size: 14px">禁用点击</div>
        <div class="buttonContent" style="justify-content: flex-start">
          <Switch v-model:checked="checked2" :disabled="true"></Switch>
        </div>
        <div style="padding: 12px; font-size: 12px">
          <Button style="font-size: 12px" @click="code2 = !code2"
            >查看代码</Button
          >
        </div>
        <div style="border-top: 1px solid #ddd; padding: 12px" v-show="code2">
          <pre>
            {{ switch2 }}
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Button from "@components/button.vue";
// 组件名大写
import Switch from "@components/switch.vue";
import { switch1, switch2 } from "./codesource/switch";

export default defineComponent({
  components: {
    Switch,
    Button,
  },
  setup() {
    const checked = ref(false);
    const checked1 = ref(true);
    const checked2 = ref(true);
    const code1 = ref(true);
    const code2 = ref(false);
    return {
      checked,
      checked1,
      checked2,
      switch1,
      switch2,
      code1,
      code2,
    };
  },
});
</script>

<style scoped>
.ButtonBox {
  border: 1px solid #ddd;
  width: 460px;
  margin-bottom: 20px;
  overflow: auto;
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
