<template>
  <div class="sideContent">
    <ul>
      <router-link v-for="(item, index) in menuList" :key="index" :to="item.path"><li :class="{active: itemIndex==index}" @click="itemIndex = index">{{ item.name }}</li></router-link>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup(props) {},
  props: {
    menuList: {
      type: Array,
      default() {
        return [{
          path:'/content',
          name: '按钮'
        }, {
          path:'/content/switch',
          name: '开关'
        },{
          path:'/content/button',
          name: '按钮'
        },{
          path:'/content/button',
          name: '按钮'
        }];
      },
    },
  },
  data (){
    return {
      itemIndex: 0
    }
  }
});
</script>

<style scoped>
ul,li{
    list-style: none;
    margin: 0;
    padding:0
}
ul {
    padding: 16px 0;
    text-align: center;
}
li {
    padding: 10px 0;
}
.sideContent{
    width: 160px;
    height: 100%;
    border: 1px solid green;
}
.active {
  background:rgb(209, 195, 65);
  color: #fff;
}
a {
  text-decoration: none;
  color: #2c3e50;
}
</style>


