<template>
  <div class="create">
    <form>
      <label>Title:</label>
      <input v-model="title" type="text" required>
      <label>Content:</label>
      <textarea v-model="body" required></textarea>
      <label>Tags (hit enter to add a tag):</label>
      <input 
        @keydown.enter.prevent="handleKeydown" 
        v-model="tag" 
        type="text"
      >
      <div v-for="tag in tags" :key="tag" class="pill">
        #{{ tag }}
      </div>
      <button>Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const title = ref('')
    const body = ref('')
    const tags = ref([])
    const tag = ref('')
    const handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/g,'') // remove all whitespace
        tags.value.push(tag.value)
      }
      tag.value = ''
    }
    return { body, title, tags, tag, handleKeydown }
  },
}
</script>