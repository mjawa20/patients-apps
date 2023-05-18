<script>
import Card from '../components/CardPatient.vue'
import CardSkeleton from '../components/CardSkeleton.vue'
import { api } from '../helpers/axios'

export default {
  components: {
    Card,
    CardSkeleton
  },
  async created() {
    this.fetchData()
  },
  data() {
    return {
      loading: true,
      patients: []
    }
  },
  methods: {
    async fetchData() {
      try {
        const res = await api.get('/patients')
        this.patients = res.data.result
      } catch (error) {
        console.log(error)
      } finally { setTimeout(() => this.loading = false, 800) }
    }
  }
}
</script>

<template>
  <div class=" xl:mx-auto max-w-7xl mx-5 ">
    <div v-if="loading" class="grid lg:grid-cols-4 gap-4">
      <CardSkeleton v-for="i in 8" :key="i" />
    </div>
    <div v-else class="grid lg:grid-cols-4 gap-4">
      <Card v-for="patient in patients" :key="patient.id" :data="patient" :fetchData="fetchData" />
    </div>
  </div>
</template>
