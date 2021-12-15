<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import sidebar from "@components/sidebar.vue";
</script>

<template>
  <header>
    <div style="height: 36px; border: 1px solid red"></div>
  </header>
  <div class="downContent">
    <aside>
      <sidebar />
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
.downContent {
  display: flex;
  height: calc(100% - 36px);
}
aside {
  height: 100%;
  /* position: relative; */
}
main {
  width: 100%;
}
</style>
