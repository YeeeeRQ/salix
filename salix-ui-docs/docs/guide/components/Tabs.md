# Tabs 带选项标签栏

<Tabs v-model:selectedTitle="tabSelected">
    <Tab title="导航1" id="000">内容1</Tab>
    <Tab title="导航22" id="001">内容22</Tab>
    <Tab title="导航333" id="002">内容333</Tab>
    <Tab title="导航4" id="003">内容444</Tab>
</Tabs>


<script setup>
import {ref} from 'vue';
import {Tabs, Tab} from "salix-ui";

const tabSelected = ref("导航1");
</script>