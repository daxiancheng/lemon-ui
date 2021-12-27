export let btn1 = `
<template>
    <Button>按钮</Button>
    <Button theme="primary">按钮</Button>
    <Button theme="danger">按钮</Button>
    <Button :disabled="true">按钮</Button>
</template>
<script lang="ts">
import Button from "@components/button.vue";

export default defineComponent({
  components: {
    Button,
  },
  setup() {
  },
});
</script>
`

export let btn2 = `
<template>
    <Button>按钮</Button>
    <Button size="large">按钮</Button>
    <Button size="small">按钮</Button>
</template>
<script lang="ts">
import Button from "@components/button.vue";

export default defineComponent({
  components: {
    Button,
  },
  setup() {
  },
});
</script>
`
export let btn3 = `
<template>
    <Button :loading="true">按钮</Button>
    <Button theme="primary" :loading="true">按钮</Button>
    <Button theme="danger" :loading="true">按钮</Button>
</template>
<script lang="ts">
import Button from "@components/button.vue";

export default defineComponent({
  components: {
    Button,
  },
  setup() {
  },
});
</script>
`