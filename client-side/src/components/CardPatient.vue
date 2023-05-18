<script>
import { api } from '../helpers/axios';

export default {
  props: ['data', 'fetchData'],
  methods: {
    async handleDelete() {
      try {
        api.get('/patientDelete/' + this.data?.id)
        this.fetchData()
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<template>
  <div class=" w-full shadow text-black rounded border p-5  bg-white text-center">
    <img class=" rounded-full w-28  mx-auto mb-4"
      src="https://as1.ftcdn.net/v2/jpg/02/66/28/80/1000_F_266288061_bGSxPvcZTXJxzjn4zWymWnmIl2cDWYJy.jpg" alt="" />

    <h2 class="font-bold break-words">{{ data?.name || 'null' }}</h2>
    <div class="flex gap-3 justify-center  text-gray-500">
      <p class="text-sm font-semibold ">{{ data?.religion || 'null' }}</p>
      <p>-</p>
      <p class="text-sm font-semibold">{{ data?.sex || 'null' }}</p>
    </div>
    <div class="space-x-1 mt-2">
      <button @click.prevent="$router.push(`/detail/${data?.id}`)" class="btn btn-sm">Detail</button>
      <button @click.prevent="$router.push(`/form/${data?.id}`)" class="btn btn-sm">Edit</button>
      <button @click.prevent="handleDelete" class="btn bg-red-600 btn-sm">Delete</button>
    </div>
  </div>
</template>
