export let switch1 = `
<template>
    <Switch v-model:checked="checked"></Switch>
    <Switch v-model:checked="checked1"></Switch>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Switch from "@components/Switch.vue";

export default defineComponent({
  components: {
    Switch,
  },
  setup() {
    const checked = ref(false)
    const checked1 = ref(true)
    return {
        checked,
        checked1,
    }
  },
});
</script>
`
export let switch2 = `
<template>
    <Switch v-model:checked="checked2" :disabled="true"></Switch>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Switch from "@components/Switch.vue";

export default defineComponent({
  components: {
    Switch,
  },
  setup() {
    const checked2 = ref(false)
    return {
        checked2
    }
  },
});
</script>
`