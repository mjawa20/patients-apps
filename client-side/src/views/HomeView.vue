<script>
import { mapActions, mapState } from 'pinia'
import Card from '../components/CardPatient.vue'
import CardSkeleton from '../components/CardSkeleton.vue'
import { useStateStore } from '../stores/state'

export default {
  components: {
    Card,
    CardSkeleton
  },
  async created() {
    this.fetchData()
  },
  methods: {
    ...mapActions(useStateStore, ['fetchData'])
  },
  computed: {
    ...mapState(useStateStore, ['loading', 'patients'])
  },
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
    <div v-if="!loading && !patients.length" class="text-2xl text-center text-black">
      No data
    </div>
  </div>
</template>
