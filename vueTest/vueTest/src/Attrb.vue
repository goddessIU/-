<template>
    <div>
        <div v-bind="$attrs"></div>
    </div>
    <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>

<script>
export default {
    inheritAttrs: false
}
</script>
<script setup>
import { useAttrs } from 'vue';
const attrs = useAttrs()
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
console.log(attrs)
</script>