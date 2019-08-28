<template>
  <div class="container">
    <h2 class="text-xl">Data should be seen</h2>
    <div class="p-8 rounded bg-gray-100 mx-auto shadow">
      {{ theData }}
    </div>
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
