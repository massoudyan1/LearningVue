<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="display name" v-model="displayName">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'

export default {
  setup(props, context) {
<<<<<<< HEAD
=======
    // console.log(context)
>>>>>>> c50aff4a97388bd2e4077be517b50c66b160f1ca
    // refs
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    // useSignup
    const { error, signup } = useSignup()

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value)
      if (!error.value) {
        context.emit('signup')
<<<<<<< HEAD
      }
=======
      }      
>>>>>>> c50aff4a97388bd2e4077be517b50c66b160f1ca
    }

    return { displayName, email, password, handleSubmit, error }
  }
}
</script>

<style>

</style>