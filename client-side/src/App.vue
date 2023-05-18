<script>
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
