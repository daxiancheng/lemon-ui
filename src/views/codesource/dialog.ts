export let dialog1 = `
<template>
    <Dialog
    :visible="visible"
    @ok="handleOk"
    @cancel="handleCancel"
    >
        <template v-slot:title>
            <h1>标题</h1>
        </template>
        <template v-slot:content>
            <p>内容区域</p>
        </template>
    </Dialog>
    <Button theme="primary" @click="visible = true">dialog</Button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Dialog from "@components/dialog.vue";

export default defineComponent({
  components: {
    Switch,
  },
  setup() {
    const visible = ref(false);
    const handleOk = () => {
      console.log("确认提交");
      handleCancel();
    };
    const handleCancel = () => {
      console.log("关闭");
      visible.value = false;
    };
    return {
        visible,
        handleOk,
        handleCancel
    }
  },
});
</script>
`

export let dialog2 = `
<template>
    <Button theme="primary" @click="open">dialog</Button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
// start 可以单独放在一个文件中
import Dialog from "@components/dialog.vue";
import { createApp, h } from 'vue'
const openDialog = (opition:{title:string,content:string,ok:Function,cancel:Function}) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    let {title, content, ok, cancel} = opition
    let app = createApp({
        render(){
            return h(Dialog, {
                visible: true,
                ok: ()=>{
                    ok()
                    div.remove()
                    app.unmount()
                },
                cancel: ()=>{
                    cancel()
                    div.remove()
                    app.unmount()
                }
            },{
                title, content
            })
        }
    })
    app.mount(div)
}
// end

export default defineComponent({
  components: {
    Switch,
  },
  setup() {
    const handleOk = () => {
      console.log("确认提交");
      handleCancel();
    };
    const handleCancel = () => {
      console.log("关闭");
    };
    const open = () => {
        openDialog({
          title: "标题",
          content: "内容区域",
          ok: handleOk,
          cancel: handleCancel,
        });
      };
    return {
        open
    }
  },
});
</script>
`