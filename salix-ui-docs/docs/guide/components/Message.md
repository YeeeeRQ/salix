# Message 消息

## 基本
<Button @click="handleBtnClick">show message</Button>

## 类型

<Button type="default" @click="openMessage({message:'Info' , type:'info'})">Info</Button>
<Button type="success" @click="openMessage({message:'Success', type:'success'})">Success</Button>
<Button type="danger" @click="openMessage({message:'Error', type:'error'})">Error</Button>
<Button type="warning" @click="openMessage({message:'Warning', type:'warning'})">Warning</Button>

## 其他特性  延迟， 手动删除 自动移除

<script setup>
import {Button, openMessage} from 'salix-ui';


const handleBtnClick= () => {
    console.log('hi');
    openMessage({
        message:"I'm a Message",
        type:"success"
    })
}

</script>