# Form 表单

## 基本

支持自定义label，自定义校验规则。

<br>
<Form :model="data4validator" :rules="formRules" ref="SxForm">
    <FormItem label="UserName:" prop="username">
        <Input v-model="data4validator.username" placeholder="UserName" />
    </FormItem>
    <FormItem label="Password:" prop="password">
        <Input v-model="data4validator.password" placeholder="Password" type="password" />
    </FormItem>
    <Button @click="submit">提交</Button>
</Form>

**示例代码:**

```vue
<template>
<Form :model="data4validator" :rules="formRules" ref="SxForm">
    <FormItem label="UserName:" prop="username">
        <Input v-model="data4validator.username" placeholder="UserName" />
    </FormItem>
    <FormItem label="Password:" prop="password">
        <Input v-model="data4validator.password" placeholder="Password" type="password" />
    </FormItem>
    <Button @click="submit">提交</Button>
</Form>
</template>

<script setup>
import { reactive, ref } from "vue";
import {Form, FormItem, Input, Button} from 'salix-ui';

const msg = ref(null);

// model
const data4validator = reactive({
    username: "Tommy",
    password: "HelloWorld",
});

// rules
const formRules = reactive({
    username: [
    {
        required: true,
        message: "请输入用户名",
        trigger: "blur",
    },
    {
        max: 10,
        message: "用户名长度超过限制",
        trigger: ["change","blur"],
    },
    ],
    password: [
    {
        required: true,
        message: "请输入密码",
        trigger: "blur",
    },
    {
        min: 6,
        message: "密码长度不应少于6位",
        trigger: ["change","blur"],
    },
    {
        max: 18,
        message: "密码长度超过限制",
        trigger: ["change","blur"],
    },
    ],
});

const SxForm = ref(null);
const submit = () => {
    SxForm.value.validate((valid) => {
        alert(valid?'OK':'Fail');
    });
};
</script>
```

<script setup>
import { reactive, ref } from "vue";
import {Form, FormItem, Input, Button} from 'salix-ui';

const msg = ref(null);

// model
const data4validator = reactive({
    username: "Tommy",
    password: "HelloWorld",
});

// rules
const formRules = reactive({
    username: [
    {
        required: true,
        message: "请输入用户名",
        trigger: "blur",
    },
    {
        max: 10,
        message: "用户名长度超过限制",
        trigger: ["change","blur"],
    },
    ],
    password: [
    {
        required: true,
        message: "请输入密码",
        trigger: "blur",
    },
    {
        min: 6,
        message: "密码长度不应少于6位",
        trigger: ["change","blur"],
    },
    {
        max: 18,
        message: "密码长度超过限制",
        trigger: ["change","blur"],
    },
    ],
});

const SxForm = ref(null);
const submit = () => {
    SxForm.value.validate((valid) => {
        alert(valid?'OK':'Fail');
    });
};
</script>