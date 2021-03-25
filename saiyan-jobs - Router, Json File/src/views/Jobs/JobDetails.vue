<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>The job id is {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading job details...</p>
  </div>  
</template>

<script>
export default {
  props: ["id"], // 🔷 ../router/index.js props: true
  data() {
    return {
      //id: this.$route.params.id, 🔷 ../router/index.js props: true
      job: null
    }
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then(response => response.json())
      .then(data => this.job = data)
      .catch((err) => console.log(err.message));
  }

};
</script>

<style>
</style>