
<template>
  <header>
    <header-logo />
  </header>
  <div class="downContent">
    <aside>
      <Sidebar />
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from "@components/sidebar.vue";
import headerLogo from '@views/headerLogo.vue'

export default defineComponent({
  components:{
    Sidebar,
    headerLogo
  },
  setup() {
    
  },
  created() {
    console.log('router', this.$route)
    if (this.$route.path !== '/content') {
      this.$router.push('/content')
    }
  }
})
</script>


<style>
.downContent {
  display: flex;
  height: calc(100% - 52px);
  background-color: rgb(250, 248, 240);
}
aside {
  height: 100%;
  /* position: relative; */
}
main {
  width: 100%;
  overflow: auto;
}
</style>
