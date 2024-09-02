<script lang="ts" setup>
const body = ref({
  name: '',
  email: '',
  message: '',
})

const message = ref('')
const loading = ref(false)

watchEffect(() => {
  if (message.value) {
    setTimeout(() => {
      message.value = ''
    }, 5000)
  }
})
async function handleSendEmail() {
  try {
    loading.value = true
    const { data } = await useFetch('/api/contact', {
      method: 'POST',
      body,
    })

    if (data.value?.status === 'error') {
      message.value = 'Algo deu errado'
    }
    message.value = 'Email enviado com sucesso!!!'
  }
  catch (error) {
    console.error(error)
  }
  finally {
    loading.value = false
    body.value = {
      name: '',
      email: '',
      message: '',
    }
  }
}
</script>

<template>
  <div class="prose flex size-full flex-col items-start py-5">
    <h2>contato</h2>
    <form class="flex w-full flex-col items-stretch gap-3 py-5" @submit.prevent="handleSendEmail">
      <div class="flex flex-col gap-3 md:flex-row">
        <div class="flex w-full flex-col gap-1">
          <label class="text-sm font-bold text-gray-950" for="name">Nome</label>
          <input id="name" v-model="body.name" required class="w-full border border-gray-950 bg-transparent px-2 py-1 outline-none focus:border-red-600" type="text" name="name">
        </div>
        <div class="flex w-full flex-col gap-1">
          <label class="text-sm font-bold text-gray-950" for="email">Email</label>
          <input id="email" v-model="body.email" required class="w-full border border-gray-950 bg-transparent px-2 py-1 outline-none focus:border-red-600" type="email" name="email">
        </div>
      </div>
      <div class="flex w-full flex-col gap-1">
        <label class="text-sm font-bold text-gray-950" for="message">Mensagem</label>
        <textarea id="message" v-model="body.message" required rows="5" class="w-full border border-gray-950 bg-transparent px-2 py-1 outline-none focus:border-red-600" name="message" />
      </div>
      <div class="flex w-full items-start justify-between">
        <button :disabled="loading" class="group flex items-center justify-center gap-2 bg-gray-950 px-8 py-3 font-bold text-white transition-colors hover:bg-gray-950/85">
          <span class="transition-transform group-hover:-translate-x-2">Enviar</span><Icon v-if="loading" name="svg-spinners:3-dots-scale" /> <Icon v-else name="lucide:send" size="20" class="transition-transform group-hover:translate-x-2 group-hover:rotate-45" />
        </button>
        <Transition enter-active-class="transition-all duration-500" leave-active-class="transition-all duration-500" enter-from-class="opacity-0 -translate-x-2" leave-to-class="opacity-0 translate-x-2">
          <p v-if="message" class="m-0">
            Email enviado com sucesso!!!
          </p>
        </Transition>
      </div>
    </form>
  </div>
</template>
