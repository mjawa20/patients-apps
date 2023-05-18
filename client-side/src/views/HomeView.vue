<script>
import Card from '../components/Card.vue'
import { api } from '../helpers/axios'

export default {
  components: {
    Card,
  },
  async created() {
    const res = await api.get('/patients')
    console.log(res)
  },
  data() {
    return {
      patients: []
    }
  }
}
</script>

<template>
  <div class=" xl:mx-auto max-w-7xl mx-5 ">
    <div class="grid lg:grid-cols-4 gap-4">
      <Card v-for="i in 10" :key="i" />
    </div>
  </div>
</template>
