# Input

## 基本

<br/>
<Input v-model="msg" placeholder="Basic Usage" />

**示例代码:**

```vue
<template>
<Input v-model="msg" placeholder="Basic Usage" />
</template>

<script setup>
import { ref } from "vue";
import { Input } from "salix-ui";

let msg = ref('');
</script>
```

## 密码框

<br/>
<Input v-model="passwd" placeholder="Input Password" type="password" />

**示例代码:**

```vue
<template>
<Input v-model="passwd" placeholder="Input Password" type="password" />
</template>

<script setup>
import { ref } from "vue";
import { Input } from "salix-ui";

let passwd = ref('');
</script>
```
## 禁用状态

<br/>
<Input placeholder="Disabled Input" :disabled="disabled" />

**示例代码:**

```vue
<template>
<Input placeholder="Disabled Input" :disabled="disabled" />
</template>

<script setup>
import { ref } from "vue";
import { Input } from "salix-ui";

let disabled = ref(true);
</script>
```

<script setup>
import { ref } from "vue";
import { Input } from "salix-ui";

let msg = ref('');

let passwd = ref('');

let disabled = ref(true);

</script>