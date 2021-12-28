export let tabs1 = `
<template>
    <Tabs v-model:tabKey="tabKey">
        <Tab title="tab 1" key="tab1">tab111</Tab>
        <Tab title="tab 2" key="tab2">tab222</Tab>
    </Tabs>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Tabs from '@components/tabs.vue'
import Tab from '@components/tab.vue'

export default defineComponent({
    components: {
        Tabs,
        Tab
    },
    setup() {
        const tabKey = ref('tab1')
        return {
            tabKey
        }
    },
})
</script>
`