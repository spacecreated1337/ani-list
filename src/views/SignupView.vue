<template>
  <div class="container mx-auto mt-32">
    <div
      class="my-16 py-20 px-10 text-center max-w-[400px] bg-slate-50 mx-auto rounded"
    >
      <h2 class="text-2xl mb-10">Sign up to AniList</h2>
      <form @submit.prevent="signupRequest">
        <input
          class="w-full border-0 py-2 px-2 mb-6 rounded"
          type="text"
          placeholder="Email"
          v-model="user.email"
        />
        <input
          class="w-full border-0 px-2 py-2 mb-6 rounded"
          type="text"
          placeholder="Username"
          v-model="user.username"
        />
        <input
          class="w-full border-0 px-2 py-2 mb-6 rounded"
          type="password"
          placeholder="Password"
          v-model="user.password"
        />
        <input
          class="w-full border-0 px-2 py-2 mb-6 rounded"
          type="password"
          placeholder="Confirm Password"
          v-model="user.confirmPassword"
        />
        <div class="flex justify-center gap-2 items-center">
          <input @click="isChecked = !isChecked" type="checkbox" />
          <div :class="{ 'blue-text-checked': isChecked }">
            You agree to our
            <a
              :class="{ 'blue-text-checked': isChecked }"
              class="link-hover"
              href=""
              >terms of service</a
            >
          </div>
        </div>
        <button class="rounded custom-btn mt-8 py-2 px-8 text-white">
          Sign up
        </button>
        <div class="flex items-center justify-center gap-1 mt-10">
          <a class="text-sm text-gray-400 link-hover" href="">Login</a>
          <i
            style="font-size: 4px"
            class="fa-solid fa-circle text-gray-400"
          ></i>
          <a class="text-sm text-gray-400 link-hover" href=""
            >Resend Verification Email</a
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isChecked: false,
      user: {
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        xhrRequest: false,
        errorMessage: "",
        successMessage: "",
      },
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
input {
  color: rgb(92, 114, 138);
  &:focus {
    outline: none;
    color: rgb(92, 114, 138);
  }
}
.custom-btn {
  background-color: rgb(61, 180, 242);
}
.blue-text {
  color: rgb(61, 180, 242);
}
.blue-text-checked {
  color: rgb(61, 180, 242);
  transition: 0.5s;
}
.link-hover {
  &:hover {
    color: rgb(61, 180, 242);
    transition: 0.5s;
  }
}
input[type="checkbox"] {
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid rgb(61, 180, 242);
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
}
input[type="checkbox"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em rgb(61, 180, 242);
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}
</style>
