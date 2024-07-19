<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const showMessage = inject('$showMessage');

const route = useRoute();
const router = useRouter();
const formRef = ref(null);
// 'large' | 'default' | 'small'

const formData = ref({
  nickname: '',
  content: '',
})
const error = ref({
  nickname: '',
  content: '',
})
const isSubmiting = ref(false)
const emit = defineEmits(['submit']); // 定义一个名为 'some-event' 的事件

function handleBtn() {
  error.value.nickname = formData.value.nickname ? '' : '请填写昵称';
  error.value.content = formData.value.content ? '' : '请填写内容';
  if (error.value.nickname || error.value.content) // 有错误
    return
  isSubmiting.value = true; // 正在提交，防止重复点击

  emit('submit', formData.value, () => {
    showMessage({
      content: "评论成功",
      type: "success",
      duration: 1000,
      container: formRef.value,
      callback: () => {
        formData.value.nickname = '';
        formData.value.content = '';
        isSubmiting.value = false;
        console.log('ok了');
      },
    })

  }); // 让父组件来处理事件

}
</script>

<template>
  <div id="data-form-container" ref="formRef" class="data-form-container">
    <div class="form-item">
      <div class="input-area">
        <el-input v-model="formData.nickname" placeholder="用户昵称" maxlength="20" show-word-limit size="small" />
      </div>
      <div class="error">{{ error.nickname }}</div>
    </div>
    <div class="form-item">
      <div class="text-area">
        <el-input v-model="formData.content" type="textarea" placeholder="输入内容" maxlength="100" show-word-limit />
      </div>
      <div class="error">{{ error.content }}</div>
    </div>
    <div class="form-item">
      <div class="button-area">
        <el-button @click="handleBtn" size="default" :disabled="isSubmiting">{{ isSubmiting ? '正在提交' : '提交'
          }}</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "@/styles/mixin.less";
@import "@/styles/var.less";

.data-form-container {
  .form-item {
    .input-area {
      width: 300px;
    }

    .text-area {
      width: 500px;
    }

    .error {
      margin: 12px auto;
      color: red
    }

    .el-button {
      width: 100px;
    }
  }
}
</style>
