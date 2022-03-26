<template>
    <!-- <input type="text" v-model="text"> -->
    {{text}}
    <input type="text" :value="text" @input="text = $event.target.value">
</template>

<script setup>
import { ref } from 'vue';
const text = ref('')
</script>