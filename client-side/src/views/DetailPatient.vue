<script>
import { api } from '../helpers/axios'

export default {
  async created() {
    try {
      const { id } = this.$route.params
      const res = await api.get(`/patient/${id}`)
      this.patient = res.data?.result
    } catch (error) {
      console.log(error)
    }
  },
  data() {
    return {
      patient: null
    }
  }
}
</script>

<template>
  <div class="max-w-xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
    <div class="border-b px-4 pb-6">
      <div class="text-center my-4 text-black">
        <img class="h-32 w-32 rounded-full border-4 border-white mx-auto my-4"
          src="https://as1.ftcdn.net/v2/jpg/02/66/28/80/1000_F_266288061_bGSxPvcZTXJxzjn4zWymWnmIl2cDWYJy.jpg" alt="" />
        <div class="py-1">
          <h3 class="font-bold text-2xl">{{ patient?.name || 'null' }}</h3>
        </div>
        <div class="py-1">
          <p class="font-medium">NIK :</p>
          <p class="text-gray-700">{{ patient?.nik || 'null' }} </p>
        </div>
        <div class="py-1">
          <p class="font-medium">SEX :</p>
          <p class="text-gray-700 items-center">{{ patient?.sex || 'null' }}</p>
        </div>
        <div class="py-1">
          <p class="font-medium">RELIGION :</p>
          <p class="text-gray-700 items-center">{{ patient?.religion || 'null' }}</p>
        </div>
        <div class="py-1">
          <p class="font-medium">PHONE :</p>
          <p class="text-gray-700 items-center">{{ patient?.phone || 'null' }}</p>
        </div>
        <div class="py-1">
          <p class="font-medium">ADDRESS :</p>
          <p class="text-gray-700 items-center">{{ patient?.address || 'null' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
