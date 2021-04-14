<template>
  <div class="chat-window">
      <div v-if="error"> {{ error }} </div>
      <div v-if="documents"></div>
  </div>
</template>

<script>
import getCollection from '../composables/getCollection'


export default {
    setup() {
        const { error, documents } = getCollection('mesages')


        return { error, documents }
    }
}
</script>

<style>

</style>