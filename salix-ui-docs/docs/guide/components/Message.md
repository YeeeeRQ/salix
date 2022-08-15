# Message 消息

## 基本

<br />
<Button @click="handleBtnClick">show message</Button>

**示例代码**

```vue
<template>
    <Button @click="handleBtnClick">show message</Button>
</template>

<script setup>
import {Button, openMessage} from 'salix-ui';


const handleBtnClick= () => {
    console.log('hi');
    openMessage({
        message:"I'm a Message",
        type:"success",
        duration: 3000,
        onClose,
    })
}

const onClose = ()=>{
    console.log('User confirmed.');
}
</script>
```

## 类型

`Message` 可通过 `type` 属性指定所需样式，可选参数： `"info"` | `"success"` | `"error"` | `"warning"` 。

::: tip
未指定 `duration` 属性则需用户手动点击关闭 `Message`
:::

<br />
<Button type="default" @click="openMessage({message:'Info' , type:'info'})">Info Type Message</Button>
<br />
<br />
<Button type="success" @click="openMessage({message:'Success', type:'success'})">Success Type Message</Button>
<br />
<br />
<Button type="danger" @click="openMessage({message:'Error', type:'error'})">Error Type Message</Button>
<br />
<br />
<Button type="warning" @click="openMessage({message:'Warning', type:'warning'})">Warning Type Message</Button>

**示例代码**

```vue
<template>
<Button type="default" @click="openMessage({message:'Info' , type:'info'})">Info Type Message</Button>
<Button type="success" @click="openMessage({message:'Success', type:'success'})">Success Type Message</Button>
<Button type="danger" @click="openMessage({message:'Error', type:'error'})">Error Type Message</Button>
<Button type="warning" @click="openMessage({message:'Warning', type:'warning'})">Warning Type Message</Button>
</template>
```
## 自动移除

通过指定 `duration` 属性告知 `Message组件` 在指定时间后自动移除。
备注：`单位ms`

<Button type="success" @click="openMessage({message:'3s后移除', type:'success', duration:3000})">Click me</Button>

**示例代码**

```vue
<template>
<Button 
    type="success" 
    @click="openMessage({message:'3s后移除', type:'success', duration:3000})"
>
    Click me
</Button>
</template>
```
## 用户确认后函数调用

可以在 `Message` 关闭后添加 `onClose` 函数, 以执行后续操作。

<Button type="success" @click="handleBtnClick2">Click me</Button>

**示例代码**

```vue
<template>
    <Button @click="handleBtnClick">show message</Button>
</template>

<script setup>
import {Button, openMessage} from 'salix-ui';


const handleBtnClick= () => {
    console.log('hi');
    openMessage({message:'关闭后执行后续操作', type:'success', onClose});
}

const onClose = ()=>{
    console.log('The Message is closed.');
}
</script>
```

<script setup>
import {Button, openMessage} from 'salix-ui';


// 基本使用
const handleBtnClick= () => {
    console.log('hi');
    openMessage({
        message:"I'm a Message",
        type:"success",
        duration: 3000,
        onClose,
    })
}

const onClose = ()=>{
    console.log('User confirmed.');
}


// 用户确认后函数调用
const handleBtnClick2= () => {
    console.log('hi');
    openMessage({message:'关闭后执行后续操作', type:'success', onClose:onClose2});
}

const onClose2 = ()=>{
    console.log('The Message is closed.');
}
</script>