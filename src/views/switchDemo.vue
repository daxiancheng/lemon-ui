<template>
    <Switch v-model:checked="checked"></Switch>
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
        return {
            checked
        }
    },
})
</script>

<style scoped>

</style>
