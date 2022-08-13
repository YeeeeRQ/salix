# Input

## 基本

<input/>
<!-- <sx-input v-model="msg" /> -->
<Input v-model="msg"></Input>
<Input v-model="msg" placeholder="placeholder"></Input>
<Input v-model="msg" placeholder="password" type="password"></Input>
{{ msg }}

<script setup>
import { ref } from "vue";
import { Input } from "salix-ui";

let msg = ref(null);

</script>