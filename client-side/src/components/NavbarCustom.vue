<template>
  <div class="bg-primary mb-16">
    <div class="navbar mx-auto max-w-7xl ">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-2xl font-serif text-white">Data Patients</a>
      </div>
      <div class="flex-none mr-[5rem]">
        <ul class="menu menu-horizontal px-1">
          <li @click.prevent="$router.push('/')" class="text-white font-serif"><a>Home</a></li>
          <li @click.prevent="$router.push('/form')" class="text-white font-serif">
            <a>Add Patient</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
