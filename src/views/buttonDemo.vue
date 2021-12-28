


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
          <Button style="font-size: 12px" @click="code1 = !code1">查看代码</Button>
        </div>
        <div class="sourceContent" v-show="code1">
          <pre class="language-css" v-html="Prism.highlight(btn1.trim(), Prism.languages.html, 'html')" /> 
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
          <Button style="font-size: 12px" @click="code2 = !code2">查看代码</Button>
        </div>
        <div class="sourceContent" v-show="code2">
          <pre class="language-css" v-html="Prism.highlight(btn2.trim(), Prism.languages.html, 'html')" /> 
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
          <Button style="font-size: 12px" @click="code3 = !code3">查看代码</Button>
        </div>
        <div class="sourceContent" v-show="code3">
          <pre class="language-css" v-html="Prism.highlight(btn3.trim(), Prism.languages.html, 'html')" /> 
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "@components/button.vue";
import {btn1, btn2, btn3} from './codesource/button'
import { defineComponent, ref } from "vue";
const Prism = (<any>window).Prism
console.log('Prism', Prism)

export default defineComponent({
  components: {
    Button,
  },
  setup() {
    const code1 = ref(true)
    const code2 = ref(false)
    const code3 = ref(false)
    return {
      btn1,
      btn2,
      btn3,
      code1,
      code2,
      code3,
      Prism
    }
  },
});
</script>

<style scoped>
</style>
