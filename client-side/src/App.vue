<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/NavbarCustom.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<template>
  <Navbar />
  <RouterView />
</template>
