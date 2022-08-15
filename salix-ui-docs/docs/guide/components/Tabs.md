# Tabs 带选项标签栏

<Tabs v-model:selectedTitle="tabSelected">
    <Tab title="选项1" id="000">内容1</Tab>
    <Tab title="选项2" id="001">内容2</Tab>
    <Tab title="选项3" id="002">内容3</Tab>
    <Tab title="选项4" id="003">内容4</Tab>
</Tabs>

<!-- <Tabs v-model:selectedTitle="tabSelected">
    <template  v-for="i in tabList" :key="i.id" >
        <Tab :id="i.id" :title="i.title" :content="i.content"></Tab>
    </template>
</Tabs> -->

<!-- <Tabs v-model:selectedTitle="tabSelected">
    <Tab  v-for="i in tabList" :key="i.id" :id="i.id" :title="i.title" :content="i.content"></Tab>
</Tabs> -->

**示例代码**

```vue
<template>
<Tabs v-model:selectedTitle="tabSelected">
    <Tab title="选项1" id="000">内容1</Tab>
    <Tab title="选项2" id="001">内容2</Tab>
    <Tab title="选项3" id="002">内容3</Tab>
    <Tab title="选项4" id="003">内容4</Tab>
</Tabs>

</template>

<script setup>
import {Tabs, Tab} from "salix-ui";

const tabSelected = ref("选项1");
</script>
```


<script setup>
import {ref, reactive, watch} from 'vue';
import {Tabs, Tab} from "salix-ui";

const tabList= reactive([
    {id:0, title:"选项1", content:"内容1"},
    {id:1, title:"选项2", content:"内容2"},
    {id:2, title:"选项3", content:"内容3"},
])


const tabSelected = ref("选项1");

// const tabSelected = ref(tabList[2].title);
// watch(tabSelected, ()=>{
//     console.log('tabSelected: ', tabSelected.value);
// })
</script>

<style>
    /* .sx-tabs-nav{
        outline:1px dashed red;
    }
    .sx-tabs-nav-item{
        outline:1px dashed red;
    }
    .sx-tabs-content{
        outline:1px dashed red;
    } */
</style>