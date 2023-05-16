<template>
  <div class="">
    <el-tabs class="demo-tabs" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="登录" name="login">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
          :size="formSize" status-icon>
          <el-form-item label="账号" prop="username">
            <el-input v-model="ruleForm.username" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="注册" name="register"><el-form ref="ruleFormRef" :model="ruleForm" :rules="rules"
          label-width="120px" class="demo-ruleForm" :size="formSize" status-icon>
          <el-form-item label="账号" prop="username">
            <el-input v-model="ruleForm.username" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">
              注册
            </el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { TabsPaneContext, FormInstance, FormRules } from "element-plus";
import router from "../../../router/router";
// 选项卡
const activeName = ref("login");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  // console.log(tab, event);
};
// 登入注册表单验证
const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();
// const ruleFormRef = ref('')
const ruleForm = reactive({
  username: "",
  password: "",
});
const rules = reactive<FormRules>({
  username: [
    { required: true, message: "请输入账号", trigger: "blur" },
    { min: 1, max: 11, message: "账号长度为1~11", trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 1, max: 11, message: "密码长度为1~11", trigger: "blur" },
  ],
});
//登录按钮
const submitForm = function () {
  if (ruleForm.username) {
    // router.push({ name: 'HomePage', state: { obj: { "username": ruleForm.username } } })
    router.push({ path: '/', query: { username: ruleForm.username } })
  }

}
</script>
<style lang="scss" scoped></style>
