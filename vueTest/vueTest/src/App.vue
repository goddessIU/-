

<script>
export default {
    data() {
      return {
        mm: '111'
      }
    },
    beforeCreate() {
        console.log(this, '***')
    },
    created() {
      console.log(this, '##E')
      console.log(this.mm)
    },
    beforeMount() {
      console.log(this.$el)
    },
    mounted() {
      console.log(this.$el)
    }
}
</script>

<script setup>
import { readonly, toRaw, reactive } from 'vue'
let m = reactive({
  name: 'wang',
  age: 20
})
let n = toRaw(m)
console.log(n.name)
m.name = 'li'
console.log(n.name)
</script>

