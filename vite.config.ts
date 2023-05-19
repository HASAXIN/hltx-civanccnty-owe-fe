import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  // define: {
  //   'process.env': {VUE_APP_FIRST_API_URL:'https://v.api.aa1.cn',VUE_APP_SECOND_API_URL:'http://122.112.174.92:8553/eai_nnl'}
  // }
})
