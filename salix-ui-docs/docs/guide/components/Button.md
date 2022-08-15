# Button 按钮

## 基本

`type` , `link` , `text` 属性用于定义按钮常见样式。

<br>
<Button type="default">Default</Button>
<Button type="primary">Primary</Button>
<Button type="success">Success</Button>
<Button type="warning">Warning</Button>
<Button type="danger">Danger</Button>
<br>

<br>
<Button type="default" text>Default</Button>
<Button type="primary" text>Primary</Button>
<Button type="success" text>Success</Button>
<Button type="warning" text>Warning</Button>
<Button type="danger" text>Danger</Button>
<br>

<br>
<Button type="default" link>Default</Button>
<Button type="primary" link>Primary</Button>
<Button type="success" link>Success</Button>
<Button type="warning" link>Warning</Button>
<Button type="danger" link>Danger</Button>
<br>


**示例代码：**

```vue
<template>
<Button type="default">Default</Button>
<Button type="primary">Primary</Button>
<Button type="success">Success</Button>
<Button type="warning">Warning</Button>
<Button type="danger">Danger</Button>

<Button type="default" text>Default</Button>
<Button type="primary" text>Primary</Button>
<Button type="success" text>Success</Button>
<Button type="warning" text>Warning</Button>
<Button type="danger" text>Danger</Button>

<Button type="default" link>Default</Button>
<Button type="primary" link>Primary</Button>
<Button type="success" link>Success</Button>
<Button type="warning" link>Warning</Button>
<Button type="danger" link>Danger</Button>
</template>
```

## 不同尺寸

通过控制 `size` 属性可以控制按钮尺寸。

<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

**示例代码：**

```vue
<template>
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
</template>
```

## 禁用状态

为标签添加 `disabled` 属性来禁用按钮.

<br>
<Button disabled type="default">Default</Button>
<Button disabled type="primary">Primary</Button>
<Button disabled type="success">Success</Button>
<Button disabled type="warning">Warning</Button>
<Button disabled type="danger">Danger</Button>
<br>
<br>
<Button disabled type="default" text>Default</Button>
<Button disabled type="primary" text>Primary</Button>
<Button disabled type="success" text>Success</Button>
<Button disabled type="warning" text>Warning</Button>
<Button disabled type="danger" text>Danger</Button>
<br>
<br>
<Button disabled type="default" link>Default</Button>
<Button disabled type="primary" link>Primary</Button>
<Button disabled type="success" link>Success</Button>
<Button disabled type="warning" link>Warning</Button>
<Button disabled type="danger" link>Danger</Button>


**示例代码：**

```vue
<template>
<Button disabled type="default">Default</Button>
<Button disabled type="primary">Primary</Button>
<Button disabled type="success">Success</Button>
<Button disabled type="warning">Warning</Button>
<Button disabled type="danger">Danger</Button>

<Button disabled type="default" text>Default</Button>
<Button disabled type="primary" text>Primary</Button>
<Button disabled type="success" text>Success</Button>
<Button disabled type="warning" text>Warning</Button>
<Button disabled type="danger" text>Danger</Button>

<Button disabled type="default" link>Default</Button>
<Button disabled type="primary" link>Primary</Button>
<Button disabled type="success" link>Success</Button>
<Button disabled type="warning" link>Warning</Button>
<Button disabled type="danger" link>Danger</Button>
</template>
```

---

也可以通过 `v-model` 绑定一个 `boolean` 值，通过对应值来控制 `disabled` 属性。以此来决定按钮的禁用与否。

<Button type="success" :disabled="isDisabled">被控按钮</Button>

<Button v-text="isDisabled?'启用':'禁用'" @click="handleDisabledBtnClick" />

**示例代码：**

```vue
<template>
<Button type="success" :disabled="isDisabled">
  被控按钮
</Button>
<Button 
  v-text="isDisabled?'启用':'禁用'"
  @click="handleDisabledBtnClick"
/>
</template>
<script setup>
import { ref } from 'vue'
import { Button } from 'salix-ui'

const isDisabled= ref(true);
const handleDisabledBtnClick = ()=>{
  isDisabled.value = !isDisabled.value;
  console.log('isDisabled:', isDisabled.value);
}
</script>
```

## 载入按钮

为按钮添加 `loading` 属性.
通过控制 `loading` 属性可以展示 `Button` 的加载状态。

**尝试点击下方按钮切换状态。**

<Button :loading="isLoading" @click="handleLoadingBtnClick" ><span v-text="isLoading ? 'Loading...' : 'Done'"></span></Button>

::: warning
不能直接修改 Button 的 `v-text` 或 `v-html` 属性来控制按钮中的内容，否则 `loading` 状态图标会消失。
:::

**示例代码：**

```vue
<template>
<Button :loading="isLoading" @click="handleLoadingBtnClick" >
  <span v-text="isLoading ? 'Loading...' : 'Done'"></span>
</Button>
</template>

<script setup>
import { ref } from 'vue'
import { Button } from 'salix-ui'

const isLoading = ref(true);
const handleLoadingBtnClick = ()=>{
  isLoading.value = !isLoading.value;
  console.log('isLoading:', isLoading.value);
}
</script>
```


<script setup>
import { ref } from 'vue'
import { Button } from 'salix-ui'

const isLoading = ref(true);
const handleLoadingBtnClick = ()=>{
  isLoading.value = !isLoading.value;
  console.log('isLoading:', isLoading.value);
}

const isDisabled= ref(true);
const handleDisabledBtnClick = ()=>{
  isDisabled.value = !isDisabled.value;
  console.log('isDisabled:', isDisabled.value);
}

</script>

<style>

</style>
