# Form 表单

## 1

<br>
<FormItem label="账号：">
    <Input />
</FormItem>

<!-- <Form>
    <FormItem>
        <Input />
    </FormItem>
</FormItem> -->

## 2

<script setup>
import { reactive, ref, toRefs } from "vue";
import {Form, FormItem, Input} from 'salix-ui';

// let msg = ref(null);
// let data4validator = reactive({
//     username: "Tommy",
//     password: "HelloWorld",
// });

// const formRules = reactive({
//     username: [
//     {
//         required: true,
//         message: "请输入用户名",
//         trigger: "blur",
//     },
//     {
//         max: 10,
//         message: "用户名长度超过限制",
//         trigger: "change",
//     },
//     ],
//     password: [
//     {
//         required: true,
//         message: "请输入密码",
//         trigger: "blur",
//     },
//     {
//         min: 6,
//         message: "密码长度不应少于6位",
//         trigger: "change",
//     },
//     {
//         max: 18,
//         message: "密码长度超过限制",
//         trigger: "change",
//     },
//     ],
// });

// const SxForm = ref(null);
// const submit = () => {
//     SxForm.value!.validate((valid) => {
//     console.log("valid: ", valid);
//     });
// };

</script>