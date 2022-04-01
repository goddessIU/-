<template>
  <input type="text" :value="textBook" @input="changeText">
  {{textBook}}
</template>



<script setup>
import { readonly, toRaw, reactive, ref } from 'vue'
const textBook = ref('')
const changeText = (e) => {
  let temp = e.target.value
  textBook.value = temp
}
</script>

