<template>
  <div class=" w-full shadow text-black rounded border p-5  bg-white text-center">
    <img class=" rounded-full w-28  mx-auto mb-4" src="https://as1.ftcdn.net/v2/jpg/02/66/28/80/1000_F_266288061_bGSxPvcZTXJxzjn4zWymWnmIl2cDWYJy.jpg" alt="" />

    <h2 class="font-bold ">Muhammad Jawahiruzzaman</h2>
    <div class="flex gap-5 justify-center  text-gray-500">
      <p class="text-sm font-semibold">Islam </p>
      <p class="text-sm font-semibold">18 </p>
      <p class="text-sm font-semibold">Male</p>
    </div>
    <div class="space-x-1 mt-2">
      <button @click.prevent="$router.push('/detail')" class="btn btn-sm">Detail</button>
      <button @click.prevent="$router.push('/detail')" class="btn btn-sm">Edit</button>
      <button @click.prevent="$router.push('/detail')" class="btn bg-red-600 btn-sm">Delete</button>
    </div>
  </div>
</template>
