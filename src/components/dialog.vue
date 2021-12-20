<template>
  <Teleport to="body">
    <div class="mask" v-if="visible">
      <div class="dialogContent">
        <header style="padding-left: 20px">
          <slot name="title">添加标题</slot>
        </header>
        <hr />
        <main>
          <slot name="content">添加内容</slot>
        </main>
        <hr />
        <footer>
          <slot name="footer">
            <div class="btnContent">
              <Button @click="cancel">取消</Button>
              <Button theme="primary" style="margin-left: 16px" @click="handleOk">确定</Button>
            </div>
          </slot>
        </footer>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "./button.vue";

export default defineComponent({
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        confirmLoading: {
            type: Boolean,
            default: false
        }
    },
  components: {
    Button,
  },
  setup(props, context) {
      const cancel = () => {
          console.log(1)
          context.emit('cancel')
      }
      const handleOk = () => {
          context.emit('ok')
      }
      return {
          cancel,
          handleOk
      }
  },
});
</script>

<style scoped>
.dialogContent {
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px 0;
  background-color: #fff;
  position: absolute;
  top: 120px;
}
.btnContent {
  display: flex;
  justify-content: end;
  margin-right: 20px;
  margin-top: 20px;
}
.mask {
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  position: relative;
  z-index: 10;
  top: -100%;
  display: flex;
  justify-content: center;
}
</style>
