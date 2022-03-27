<template>
    <div>
        <div v-bind="$attrs"></div>
    </div>
    <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>


<script setup>
</script>