<script setup lang="ts">
// COMPOSABLES
const router = useRouter();

const store = useVuexStore();

const formErrorMessage = useState("form-error-message", () => "");

const pendingFormSubmit = useState("pending-form-submit", () => false);

// EVENT HANDLER
const handleSubmit = async (e: Event) => {
  const formData = new FormData(e.target as unknown as HTMLFormElement);

  try {
    pendingFormSubmit.value = true;

    const res = await $fetch("/api/login", {
      method: "POST",
      body: formData,
    });

    store.commit("auth.set-user", res);

    router.push("/");
  } catch (error) {
    formErrorMessage.value = "Failed to login, try again later";
  } finally {
    pendingFormSubmit.value = false;

    formErrorMessage.value = "";
  }
};

// WATCHERS
watch(formErrorMessage, async (errorMessage) => {
  if (errorMessage) {
    await delay(3 * 1000);
    formErrorMessage.value = "";
  }
});
</script>

<template>
  <div class="w-full flex flex-col justify-center items-center">
    <div class="w-full space-y-4 md:w-96">
      <Alert
        v-show="formErrorMessage"
        class="w-full bg-red-500 p-2 rounded-lg text-white"
      >
        {{ formErrorMessage }}
      </Alert>

      <h1 class="text-2xl font-medium">Login into your account</h1>
      <template>
        <h1>Login</h1>
      </template>
      <form
        method="post"
        @submit.prevent="handleSubmit"
        class="w-full space-y-3"
      >
        <Input name="email" placeholder="Email" />

        <InputPassword
          name="password"
          required
          placeholder="Password"
          minlength="8"
        />

        <Button :disabled="pendingFormSubmit" type="submit" class="!mt-8">
          <IconsLoader
            v-if="pendingFormSubmit"
            class="animate-spin inline-flex mr-1"
          />

          Login</Button
        >
      </form>

      <p>
        Don't have an account ?
        <NuxtLink class="hover:underline hover:text-primary" to="/register"
          >Register Now</NuxtLink
        >
      </p>
    </div>
  </div>
</template>
