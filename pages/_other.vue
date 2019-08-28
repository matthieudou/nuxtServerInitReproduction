<template>
  <div class="container p-12">
    <h1 class="text-2xl font-bold mb-10">Other page</h1>
    <h2 class="text-xl mb-8">Data should be seen</h2>
    <div class="p-8 rounded bg-gray-100 mx-auto shadow">
      {{ theData }}
    </div>

    <nuxt-link class="mt-8 block text-blue-500" to="/">
      Back home
    </nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    theData () {
      return this.$store.state.preFetchedString
    }
  }
}
</script>
