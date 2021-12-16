<template>
    <button :class="{checked, disabled}" @click="toggle" :disabled="disabled"><span></span></button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        checked: Boolean,
        disabled: Boolean
    },
    setup(props, context) {
        const toggle = () =>{
            context.emit('update:checked', !props.checked)
        }
        return {
            toggle
        }
    },
})
</script>

<style scoped>
button{
    outline: none;
    width: 44px;
    height: 22px;
    background: rgb(209, 195, 65);
    border: none;
    border-radius: 11px;
    position: relative;
    cursor: pointer;
}
button > span {
    width: 18px;
    height: 18px;
    background: #fff;
    position: absolute;
    border-radius: 9px;
    left: 2px;
    top: 2px;
    transition: left  250ms;
}
button:active > span {
    width: 22px;
}
.checked{
    background: #aaa;
}
button.checked > span {
    left: calc(100% - 20px);
}
button:active.checked > span {
    margin-left: -4px;
}
.disabled {  
    cursor: not-allowed;
}
</style>