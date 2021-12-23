<template>
  <div class="sideContent">
    <ul>
      <router-link v-for="(item, index) in menuList" :key="index" :to="item.path">
        <li :class="{ active: itemIndex == index }" @click="itemClick(item, index)">{{ item.name }}</li>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import { methods } from "@utils/observable";
import { itemType } from "@utils/interface";

export default defineComponent({
  setup() {
    let itemIndex = ref(0);
    const itemClick = function (item: itemType, index: number) {
      itemIndex.value = index;
      methods.setTitle(item.name);
    };
    return {
      itemIndex,
      itemClick,
    };
  },
  props: {
    menuList: {
      type: Array as PropType<itemType[]>,
      default() {
        return [
          {
            path: "/content",
            name: "lemo-button",
          },
          {
            path: "/content/switch",
            name: "lemo-switch",
          },
          {
            path: "/content/dialog",
            name: "lemo-dialog",
          },
          {
            path: "/content/tabs",
            name: "lemo-tabs",
          },
        ];
      },
    },
  },
});
</script>

<style scoped>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul {
  padding: 16px 0;
  text-align: center;
}
li {
  padding: 10px 0;
}
.sideContent {
  width: 160px;
  height: 100%;
  background-color: rgb(252, 235, 72);
  font-weight: bold;
}
.active {
  background: #fff;
  color: rgb(209, 195, 65);
}
a {
  text-decoration: none;
  color: #435d77;
}
</style>


