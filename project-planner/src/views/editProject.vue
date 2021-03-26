<template>

  <form @submit.prevent="handleSubmit">
    <div id="btndiv">
        <button id="close" class="btn" @click="navigateHome">
        <span class="material-icons">close</span>
    </button>
    </div>
    <label>Title:</label>
    <input type="text" v-model="title" required />

    <label>Details:</label>
    <textarea v-model="details" required></textarea>

    <button class="btn">Update Project</button>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      details: "",
      uri: "http://localhost:3000/projects/" + this.id,
    };
  },
  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => {
        this.title = data.title;
        this.details = data.details;
      })
  },
  methods: {
    handleSubmit() {

      let project = {
        title: this.title,
        details: this.details,
      }


      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project)
      })
        .then((_) => this.navigateHome() )
        .catch((err) => console.log(err))
    },
    navigateHome(){
        this.$router.push("/")
    }

  }
}
</script>

<style>
#close{
    margin: -10px -10px 0 0;
    background: rgba(200,200,200, 0.6);
    display: grid;
    float: right;
    color: rgb(200,40,40);
    padding: 3px;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
}
</style>