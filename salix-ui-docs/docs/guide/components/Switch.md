# Switch 切换开关

# 基本使用

使用 `v-model` 绑定一个 `boolean` 值用以确定当前开关的状态。

<br />

<Switch v-model="isOpened" ></Switch>

<br />

**示例代码**

```vue
<template>
    <Switch v-model="isOpened" ></Switch>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Switch } from 'salix-ui'

const isOpened= ref(true);
</script>
```

# 禁用

使用 `v-model` 绑定 `disabled` 属性一个 `boolean` 变量用以确定当前开关是否禁用。

<br />

<Switch v-model="isOpened2" :disabled="isDisabled"></Switch>

<Button class="demo-btn" @click="handleDisabledBtnClick" v-text="isDisabled?'启用':'禁用'" />

**示例代码**

```vue
<template>
    <Switch v-model="isOpened" :disabled="isDisabled"/>
    <Button 
        @click="handleDisabledBtnClick"
        v-text="isDisabled?'启用':'禁用'" 
    />
</template>
<script setup>
import { ref, watch} from 'vue'
import { Switch, Button } from 'salix-ui'

const isOpened = ref(false);
const isDisabled= ref(true);
const handleDisabledBtnClick = () =>{
    isDisabled.value = !isDisabled.value;
}
</script>
```

<script setup>
import { ref, watch} from 'vue'
import { Switch, Button } from 'salix-ui'

const isOpened= ref(true);
watch(isOpened,()=>{
    console.log("BasicDemo Switch is opened: ", isOpened.value);
})

const isOpened2 = ref(false);
watch(isOpened2,()=>{
    console.log("DisableDemo Switch is opened: ", isOpened2.value);
})
const isDisabled= ref(true);
watch(isDisabled, ()=>{
    console.log("DisableDemo Switch is disabled: ", isDisabled.value);
})
const handleDisabledBtnClick = () =>{
    isDisabled.value = !isDisabled.value;
}

</script>

<style>

.demo-btn{
    margin-left: 24px;
}
</style>