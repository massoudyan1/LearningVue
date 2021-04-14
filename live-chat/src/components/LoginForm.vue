<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Log in</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'
<<<<<<< HEAD
=======

>>>>>>> c50aff4a97388bd2e4077be517b50c66b160f1ca
export default {
  setup(props, context) {
    // refs
    const email = ref('')
    const password = ref('')
<<<<<<< HEAD
    const { error, login } = useLogin()
=======

    const { error, login } = useLogin()

>>>>>>> c50aff4a97388bd2e4077be517b50c66b160f1ca
    const handleSubmit = async () => {
      await login(email.value, password.value)
      if (!error.value) {
        context.emit('login')
      }
    }
<<<<<<< HEAD
=======

>>>>>>> c50aff4a97388bd2e4077be517b50c66b160f1ca
    return { email, password, handleSubmit, error }
  }
}
</script>

<style>
<<<<<<< HEAD
=======

>>>>>>> c50aff4a97388bd2e4077be517b50c66b160f1ca
</style>