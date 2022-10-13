<template>
  <div>
    <form @submit.prevent="">
      <div class="md:grid grid-cols-3 gap-5 mt-10 mb-5">
        <div class="basis-1/4 mb-3">
          <div class="relative">
            <input
              :value="filter"
              @input="updateSearchInput"
              class="placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-full"
              placeholder="Search..."
            />
            <i
              v-if="filter.length > 0"
              @click="$emit('reset', 'filter')"
              class="fa-solid fa-xmark cursor-pointer absolute -translate-x-1/2 -translate-y-1/2 right-2 top-1/2"
            ></i>
          </div>
        </div>
        <div class="basis-1/4 mb-3">
          <div class="relative">
            <select
              :value="selectGenreId"
              @change="updateGenresInput"
              class="placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-full"
            >
              <option value="" selected disabled hidden>Select Genre</option>
              <option
                v-for="genres in animeGenres"
                :value="genres.mal_id"
                :key="genres.mal_id"
              >
                {{ genres.name }}
              </option>
            </select>
            <i
              v-if="selectGenreId.length > 0"
              @click="$emit('reset', 'selectGenreId')"
              class="fa-solid fa-xmark cursor-pointer absolute -translate-x-1/2 -translate-y-1/2 top-1/2 right-5"
            ></i>
          </div>
        </div>
        <div class="basis-1/4 mb-3">
          <div class="relative">
            <select
              :value="getSelectedSortBy"
              @change="updateSortByInput"
              class="placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-full"
            >
              <option value="" selected disabled hidden>Sort By</option>
              <option v-for="(name, i) in sortBy" :key="i" :value="name">
                {{ name }}
              </option>
            </select>
            <i
              v-if="selectedSortBy.length > 0"
              @click="$emit('reset', 'selectedSortBy')"
              class="fa-solid fa-xmark cursor-pointer absolute -translate-x-1/2 -translate-y-1/2 right-5 top-1/2"
            ></i>
          </div>
        </div>
      </div>
    </form>
    <button
      @click.prevent="$emit('find-anime')"
      class="rounded custom-btn py-2 px-8 text-white mb-10"
    >
      Найти
    </button>
  </div>
</template>

<script>
export default {
  props: {
    animeGenres: {
      type: Array,
      required: false,
    },

    sortBy: {
      type: Array,
      required: false,
    },

    filter: {
      type: String,
    },

    selectedSortBy: {
      type: String,
    },

    selectGenreId: {
      type: String,
    },
  },
  mounted() {
    window.addEventListener("keyup", this.handlerEnter);
  },
  methods: {
    handlerEnter(event) {
      if (event.code === "Enter") {
        this.$emit("find-anime");
      }
    },
    updateSearchInput(event) {
      this.$emit("update:filter", event.target.value);
    },

    updateGenresInput(event) {
      this.$emit("update:selectGenreId", event.target.value);
    },

    updateSortByInput(event) {
      this.$emit("update:selectedSortBy", event.target.value);
    },
  },
  computed: {
    getSelectedSortBy() {
      return this.sortBy.find((anime) => {
        return anime.toLowerCase() === this.selectedSortBy.toLowerCase();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-btn {
  background-color: rgb(61, 180, 242);
}
</style>
