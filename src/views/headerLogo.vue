<template>
    <div class="headerContent">
        <div class="logo" @click="logoClick">
            <img src="@assets/lemo.png" alt="" srcset="" width="40">
            <div style="font-size:24px;">lemo-ui</div>
        </div>
        <div class="title">{{title}}</div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { message } from "@utils/observable";

export default defineComponent({
    props: {
        title: String
    },
    setup() {
        let title = computed(()=>{
            return message.title
        })
        return {
            title
        }
    },
    methods: {
        logoClick () {
            this.$router.push('/')
        }
    }
})
</script>

<style scoped>
.headerContent {
    height: 52px;
    background: #37474F;
    display: flex;
}
.logo {
    width: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    width: calc(100% - 160px);
}
</style>
