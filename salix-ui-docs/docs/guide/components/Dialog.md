# Dialog 对话框

## 使用openDialog函数

<br/>
<Button @click="showDialog">Show Dialog</Button>

**示例代码：**

```vue
<template>
<Button @click="showDialog">Show Dialog</Button>
</template>
<script setup>
import { ref } from "vue";
import { Button, openDialog } from "salix-ui";

const showDialog = () => {
    openDialog({
        title: () => "标题",
        content: () => "你好",
        ok() {
            console.log("ok");
            return true;
        },
        cancel() {
            console.log("cancel");
            return true;
        },
    });
};
</script>
```
## 使用Dialog标签

<br/>
<Button @click="handleBtnClick">Toggle</Button>

<Dialog
    v-model:visible="visible"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
>
    <template v-slot:title>
        <strong>标题</strong>
    </template>
    <template v-slot:content>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis,
            reprehenderit ut tempora dolorum voluptatum expedita, nihil cumque
            eaque vitae asperiores accusamus esse beatae nobis, placeat eligendi
            sequi omnis! Ipsam, iusto!
        </p>
    </template>
</Dialog>

**示例代码：**

```vue
<template>
<Button @click="handleBtnClick">Toggle</Button>
<Dialog
    v-model:visible="visible"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
>
    <template v-slot:title>
        <strong>标题</strong>
    </template>
    <template v-slot:content>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis,
            reprehenderit ut tempora dolorum voluptatum expedita, nihil cumque
            eaque vitae asperiores accusamus esse beatae nobis, placeat eligendi
            sequi omnis! Ipsam, iusto!
        </p>
    </template>
</Dialog>
</template>
<script setup>
import { ref } from "vue";
import { Button, Dialog} from "salix-ui";

const visible = ref(false);
const handleBtnClick = () => {
    visible.value = !visible.value;
};
const f1 = () => {
    console.log("call f1");
    return true;
};
const f2 = () => {
    console.log("call f2");
    return true;
};
</script>
```

<script setup>
import { ref } from "vue";
import { Button, Dialog, openDialog } from "salix-ui";

const visible = ref(false);
const handleBtnClick = () => {
    visible.value = !visible.value;
};
const f1 = () => {
    console.log("call f1");
    return true;
};
const f2 = () => {
    console.log("call f2");
    return true;
};

const showDialog = () => {
    openDialog({
        title: () => "标题",
        content: () => "你好",
        ok() {
            console.log("ok");
            return true;
        },
        cancel() {
            console.log("cancel");
            return true;
        },
    });
};
</script>
