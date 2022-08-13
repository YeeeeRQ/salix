# Switch 切换开关

# 默认

<br>
<Switch v-model="sw_isOpen" ></Switch>

# 禁用

<br>
<Switch disabled></Switch>

<script setup>
import { h, ref } from 'vue'
import { Switch } from 'salix-ui'

const sw_isOpen= ref(true);

</script>