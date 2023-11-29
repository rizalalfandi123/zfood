<script setup lang="ts">
// COMPOSABLES
const router = useRouter();

const store = useVuexStore();

const formErrorMessage = useState("form-error-message", () => "");

const pendingFormSubmit = useState("pending-form-submit", () => false);

// EVENT HANDLER
const handleSubmit = async (e: Event) => {
  const formData = new FormData(e.target as unknown as HTMLFormElement);

  if (formData.get("password") !== formData.get("confirm-password")) {
    formErrorMessage.value = "Password is not match";

    return null;
  }

  try {
    pendingFormSubmit.value = true;

    const user = await $fetch("/api/register", {
      method: "POST",
      body: formData,
    });

    store.commit("auth.set-user", user);

    router.push("/");
  } catch (error) {
    formErrorMessage.value = "Failed to register, try again later";
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

      <h1 class="text-2xl font-medium">Register your account</h1>

      <form
        method="post"
        @submit.prevent="handleSubmit"
        class="w-full space-y-3"
      >
        <Input name="name" placeholder="Name" />

        <Input name="email" type="email" required placeholder="Email" />

        <InputPassword
          name="password"
          required
          placeholder="Password"
          minlength="8"
        />

        <InputPassword
          name="confirm-password"
          required
          placeholder="Confirm Password"
          minlength="8"
        />

        <Button :disabled="pendingFormSubmit" type="submit" class="!mt-8">
          <IconsLoader
            v-if="pendingFormSubmit"
            class="animate-spin inline-flex mr-1"
          />

          Register</Button
        >
      </form>

      <p>
        Already have an account ?
        <NuxtLink class="hover:underline hover:text-primary" to="/login"
          >Login Now</NuxtLink
        >
      </p>
    </div>
  </div>
</template>
