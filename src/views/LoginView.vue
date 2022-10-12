<template>
  <div class="container mx-auto mt-32">
    <div
      class="my-16 py-20 px-10 text-center max-w-[400px] bg-slate-50 mx-auto rounded"
    >
      <h2 class="text-2xl mb-10">Login</h2>
      <form>
        <input
          class="w-full border-0 py-2 px-2 mb-6 rounded"
          type="text"
          placeholder="Email"
        />
        <input
          class="w-full border-0 px-2 py-2 rounded"
          type="text"
          placeholder="Password"
        />
        <button class="rounded custom-btn mt-8 py-2 px-8 text-white">
          Login
        </button>
        <div class="mt-6">
          <a class="text-sm text-gray-400 link-hover" href=""
            >Forgot password?</a
          >
        </div>
        <div class="mt-6">
          <a class="text-sm text-gray-400 link-hover" href=""
            >Not registered?<span class="blue-text"> Create an account</span></a
          >
        </div>
      </form>
    </div>
  </div>
</template>
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
.link-hover {
  transition: 0.5s;
  &:hover {
    color: rgb(61, 180, 242);
    transition: 0.5s;
  }
}
</style>
