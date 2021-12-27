
<template>
    <div class="switchContent">
        <Switch v-model:checked="checked"></Switch>
    </div>
    <div class="switchContent">
        <Switch v-model:checked="checked1"></Switch>
    </div>
    <div class="switchContent">
        <Switch v-model:checked="checked2" :disabled="true"></Switch>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// 组件名大写
import Switch from '@components/switch.vue'

export default defineComponent({
    components: {
        Switch
    },
    setup() {
        const checked = ref(false)
        const checked1 = ref(true)
        const checked2 = ref(true)
        return {
            checked,
            checked1,
            checked2
        }
    },
})
</script>

<style scoped>
    .switchContent {
        display: inline-block;
        margin: 20px;
    }
</style>
