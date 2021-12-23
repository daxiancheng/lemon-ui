<template>
    <div class="tabTitle" ref="container">
        <div
            v-for="(item,index) in tabTitleList"
            :key="index"
            @click="tabChange(item)"
            class="tabItem"
            :class="{ select: item.key === tabKey }"
            :ref="(el) => { if (item.key === tabKey && el) selectedItem = el }"
        >{{ item.title }}</div>
    </div>
    <div class="lemo-slide" ref="slide"></div>
    <div class="tabContent">
        <component :is="current"></component>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from 'vue'
import Tab from "./tab.vue"
import { tabType } from '@utils/interface'

export default defineComponent({
    props: {
        tabKey: {
            type: String
        }
    },
    setup(props, context) {
        // context.slots.default() 可以拿到在父节点中插入的虚拟节点
        const tabList = context.slots.default?.()
        if (!tabList) {
            throw new Error('Tabs组件必须和Tab组件搭配使用')
        }
        const isTab = tabList.every((item) => {
            return item.type === Tab
        })
        if (!isTab) {
            throw new Error('Tabs组件必须和Tab组件搭配使用')
        }
        const selectedItem = ref()
        const container = ref()
        const slide = ref()

        const current = computed(() => {
            return tabList.filter((item) => {
                return item.props?.key === props.tabKey
            })[0]
        })
        const tabTitleList = tabList.map((item) => {
            return (<tabType>item.props)
        })
        // 方法
        const tabChange = (item: tabType) => {
            console.log()
            context.emit('update:tabKey', (item.key))
        }
            
        watchEffect(()=>{
            let {left: left1} = (<HTMLDivElement>container.value).getBoundingClientRect()
            let {left: left2, width} = (<HTMLDivElement>selectedItem.value).getBoundingClientRect()
            slide.value.style.left = left2 - left1 + 'px'
            slide.value.style.width = width + 'px'
        }, {
             flush: 'post'
        })
        
        return {
            tabTitleList,
            tabChange,
            tabList,
            selectedItem,
            container,
            current,
            slide
        }
    },
})
</script>

<style scoped>
.tabTitle {
    display: flex;
    cursor: pointer;
    border-bottom: 1px solid #ddd;
    font-weight: bold;
}
.tabItem {
    padding: 12px 16px;
    margin-right: 32px;
}
.tabContent {
    padding: 12px 16px;
}
.tabItem:last-child {
    margin-right: 0;
}
.select {
    color: rgb(209, 195, 65);
}
.lemo-slide {
    width: 0px;
    height: 2px;
    background-color: rgb(209, 195, 65);
    position:relative;
    top: -1px;
    transition: all 250ms;
}
</style>