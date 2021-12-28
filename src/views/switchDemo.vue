
<template>
  <div style="color: #37474f; margin-left: 20px">
    <h2>Switch 组件示例</h2>
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
        <div class="sourceContent" v-show="code1">
          <pre class="language-css" v-html="Prism.highlight(switch1.trim(), Prism.languages.html, 'html')" /> 
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
        <div class="sourceContent" v-show="code2">
          <pre class="language-css" v-html="Prism.highlight(switch2.trim(), Prism.languages.html, 'html')" /> 
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
const Prism = (<any>window).Prism

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
      Prism
    };
  },
});
</script>

<style scoped>

</style>
