<template>
  <div class="project" :class="{ complete: project.complete }">
    <div class="actions">
      <h3 @click="showDetails = !showDetails" class="noHighlight">{{ project.title }}</h3>
      <div class="icons">
        <router-link :to="{ name: 'EditProject', params: { id: project.id } }">
          <span class="material-icons noHighlight">edit</span>
        </router-link>
        <span @click="deleteProject" class="material-icons noHighlight">delete</span>
        <span @click="toggleComplete" class="material-icons tick noHighlight">done</span>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      showDetails: false,
      uri: "http://localhost:3000/projects/" + this.project.id,
    };
  },
  methods: {
    deleteProject() {
      fetch(this.uri, { method: "DELETE" })
        .then((_) => this.$emit("delete", this.project.id))
        .catch((err) => console.log(err));
    },
    toggleComplete() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ complete: !this.project.complete }),
      })
        .then((_) => {
          this.$emit("complete", this.project.id);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid rgb(255, 60, 100);
}
h3 {
  cursor: pointer;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}

.project.complete {
  border-left: 4px solid rgb(100, 230, 60);
}
.project.complete .tick {
  color: rgb(100, 230, 60);
}

.noHighlight{
    /* Remove blue text highligt */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>