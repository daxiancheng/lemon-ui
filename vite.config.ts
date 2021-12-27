import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'
// compiler-core 核心作用是将字符串转换成 抽象对象语法树AST
import { baseParse } from '@vue/compiler-core'
const { resolve } = require('path')

// https://vitejs.dev/config/
const dfConfig = defineConfig({
  plugins: [vue()],
  server: {
    port: 4396
  },
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'src/assets'),
      '@components': resolve(__dirname, 'src/components'),
      '@views': resolve(__dirname, 'src/views'),
      '@utils': resolve(__dirname, 'src/utils')
    },
    extensions: ['.ts']
  },
})
export default {
  ...dfConfig,
  //通过 vueCustomBlockTransforms 选项来指定自定义区块的转换规则
  vueCustomBlockTransforms: {
    demo: (options) => {
      //将options解构赋值
      const { code, path } = options;
      //异步读取文件内容，并转为string类型
      const file = fs.readFileSync(path).toString();
      //将读取到的文件中的自定义快渲染为AST
      const parsed = baseParse(file).children.find(n => n.tag === 'demo')
      //读取自定义模块中的文本内容
      // const title = parsed.children[0].content;
      //将读取文件中的自定义块切分，并转为字符串类型
      const main = file.split(parsed.loc.source).join('').trim();
      //以JSON数据类型返回
      return `export default function (Component) {
        Component.__sourceCode = ${JSON.stringify(main)}
      }`.trim();
    }
  }
}
