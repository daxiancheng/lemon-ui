import Dialog from '@components/dialog.vue'
import { createApp, h } from 'vue'

export const openDialog = (opition:{title:string,content:string,ok:Function,cancel:Function}) => {
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