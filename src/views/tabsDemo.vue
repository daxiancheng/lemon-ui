<template>
<div style="color: #37474f; margin-left: 20px">
    <h2>Switch 组件示例</h2>
    <div class="ButtonBox">
      <div>
        <div style="padding: 12px; font-size: 14px">常规用法</div>
        <div class="tabsDomContent">
          <Tabs v-model:tabKey="tabKey">
           <Tab title="tab 1" key="tab1">tab111</Tab>
           <Tab title="tab 2" key="tab2">tab222</Tab>
        </Tabs>
        </div>
        <div style="padding: 12px; font-size: 12px">
          <Button style="font-size: 12px" @click="code1 = !code1"
            >查看代码</Button
          >
        </div>
        <div class="sourceContent" v-show="code1">
          <pre class="language-css" v-html="Prism.highlight(tabs1.trim(), Prism.languages.html, 'html')" /> 
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Button from "@components/button.vue";
import {tabs1} from './codesource/tabs'
import Tabs from '@components/tabs.vue'
import Tab from '@components/tab.vue'
const Prism = (<any>window).Prism

export default defineComponent({
    components: {
        Tabs,
        Tab,
        Button
    },
    setup() {
        const tabKey = ref('tab1')
        const code1 = ref(true)
        return {
            tabKey,
            tabs1,
            code1,
            Prism
        }
    },
})
</script>

<style scoped>
.tabsDomContent {
    padding: 12px;
    border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
}
</style>
