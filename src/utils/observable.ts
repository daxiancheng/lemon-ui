import { reactive } from "vue";
// vue2 的observable 用reactive代替
export let message = reactive({
    title: '按钮',
})
export let methods = {
    setTitle(title: string) {
        message.title = title
    }
}

