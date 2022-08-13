# Button 按钮

## 基本

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

## 尺寸
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

## 禁用状态

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

## 载入按钮

<br>
<Button type="default" loading>Loading...</Button>
<Button type="default">Done</Button>

<br>
<br>
<br>

<Badge />

_你好， {{ msg }}_

<RedDiv>

_当前计数为： {{ count }}_

</RedDiv>

<Button>Hello</Button>
<button @click="count++">点我！</button>

<script setup>
import { h, ref } from 'vue'
import { Button } from 'salix-ui'

const RedDiv = (_, ctx) => h(
  'div',
  {
    class: 'red-div',
  },
  ctx.slots.default()
)
const msg = 'Markdown 中的 Vue'
const count = ref(0)
</script>

<style>
.red-div {
  color: red;
}
</style>
