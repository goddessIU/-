<script setup>
import { provide } from 'vue';
import Attrb from './Attrb.vue'
import { useRouter } from 'vue-router';
provide('message', 'hello')
const router = useRouter()
const toA = () => {
  router.push({
    name: 'user'
  })
}


</script>

<template>
  <Attrb :modelValue="searchText" @update:modelValue="newValue => searchText = newValue"></Attrb>
  <button @click="toA">sss</button>
  <router-view></router-view>
</template>


