<template>
  <div class="text-white" v-if="anime">
    <div>
      <div class="relative">
        <div class="upperblock-overflow"></div>
        <div
          class="h-96 bg-no-repeat bg-cover bg-center flex items-end"
          :style="{
            'background-image':
              'url(' + anime.trailer.images.maximum_image_url + ')',
          }"
        >
          <div class="container mx-auto relative">
            <div
              class="lg:grid 2xl:grid-cols-[15%,1fr] lg:grid-cols-[20%,1fr] gap-10 justify-between items-center mb-5"
            >
              <div class="translate-y-1/2 relative z-[1] lg:block hidden">
                <img
                  class="rounded-lg h-80 w-full"
                  :src="anime.images.jpg.large_image_url"
                  :alt="anime.title"
                />
              </div>
              <div
                class="flex justify-between self-end items-center lg:col-start-2"
              >
                <div>
                  <h2 class="text-4xl font-bold">{{ anime.title }}</h2>
                  <h2 class="text-3xl mt-3">{{ anime.title_english }}</h2>
                </div>
                <div class="flex gap-5">
                  <div>
                    <i class="fa-solid fa-2x fa-circle-plus cursor-pointer"></i>
                  </div>
                  <div>
                    <i class="fa-regular fa-2x fa-heart cursor-pointer"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="bottomblock-overflow"></div>
        <div class="container mx-auto flex flex-col px-2 sm:px-0">
          <div
            class="mt-8 sm:grid 2xl:grid-cols-[15%,1fr] lg:grid-cols-[20%,1fr] relative gap-10"
          >
            <div class="lg:hidden">
              <div
                class="smm:flex justify-between flex-col smm:flex-row items-center block sm:block"
              >
                <img
                  class="rounded-lg h-80"
                  :src="anime.images.jpg.large_image_url"
                  :alt="anime.title"
                />
                <div>
                  <div class="mt-5">
                    <div
                      class="bg-[#ff9700] flex-col gap-3 text-center sm:mt-5 rounded-2xl px-5 py-5 flex items-center justify-center w-[156px] h-[156px] mx-auto lg:mx-0"
                    >
                      <h2 class="text-xl font-bold">SCORE</h2>
                      <p class="text-4xl font-bold">{{ anime.score }}</p>
                      <p>
                        {{ anime?.scored_by?.toLocaleString("ru-RU") }} users
                      </p>
                    </div>
                  </div>
                  <div class="relative col-start-2 block sm:hidden mt-5">
                    <div>
                      <div class="md:flex justify-between items-center">
                        <ul>
                          <li class="sm:inline font-bold">
                            Ranked:
                            <span class="font-normal">#{{ anime.rank }}</span>
                          </li>
                          <li class="sm:inline font-bold">
                            Popularity:
                            <span class="font-normal">{{
                              anime.popularity
                            }}</span>
                          </li>
                          <li class="sm:inline font-bold">
                            Members:
                            <span class="font-normal">{{ anime.members }}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sm:hidden block">
                <h3
                  class="text-2xl font-bold md:order-first order-last sm:mt-2 mt-4 text-center sm:text-left"
                >
                  Synopsis
                </h3>
                <p class="mt-4 text-lg">{{ getAnimeDescription }}</p>
              </div>
            </div>
            <div class="relative col-start-2 hidden sm:block">
              <div>
                <div class="lg:flex justify-between items-center block">
                  <ul>
                    <li class="sm:inline md:mr-3 font-bold">
                      Ranked: <span class="font-normal">#{{ anime.rank }}</span>
                    </li>
                    <li class="sm:inline md:mr-3 font-bold">
                      Popularity:
                      <span class="font-normal">{{ anime.popularity }}</span>
                    </li>
                    <li class="sm:inline md:mr-3 font-bold">
                      Members:
                      <span class="font-normal">{{ anime.members }}</span>
                    </li>
                  </ul>
                  <h3
                    class="text-2xl font-bold md:order-first order-last sm:mt-0 text-center sm:text-left"
                  >
                    Synopsis
                  </h3>
                </div>
                <p class="mt-4 text-lg">{{ getAnimeDescription }}</p>
              </div>
            </div>
          </div>
          <div class="relative mt-14">
            <div class="grid gap-5 grid-cols-[auto,_1fr] pb-10">
              <div class="hidden lg:block">
                <div
                  class="bg-[#ff9700] flex-col gap-3 text-center rounded-2xl px-5 py-5 flex items-center justify-center"
                >
                  <h2 class="text-xl font-bold">SCORE</h2>
                  <p class="text-4xl font-bold">{{ anime.score }}</p>
                  <p>{{ anime?.scored_by?.toLocaleString("ru-RU") }} users</p>
                </div>
              </div>
              <div class="hidden md:grid">
                <div
                  class="border-2 border-solid border-[#3ec9c2] rounded-tr-xl rounded-tl-xl flex pl-10"
                >
                  <ul class="flex grow items-center gap-5">
                    <li class="inline">
                      Type: <span>{{ anime.type }}</span>
                    </li>
                    <li class="inline">
                      Episodes: <span>{{ anime.episodes }}</span>
                    </li>
                    <li class="inline">
                      Genres:
                      <span
                        class="ml-1"
                        v-for="(genre, index) in anime.genres"
                        :key="genre.mal_id"
                        >{{ genre.name }}
                        {{ index + 1 === anime.genres.length ? "" : "," }}
                      </span>
                    </li>
                    <li class="inline">
                      Status: <span>{{ anime.status }}</span>
                    </li>
                  </ul>
                </div>
                <div
                  class="grid grid-cols-[1fr,_auto] border-2 border-t-0 border-solid border-[#3ec9c2] rounded-br-xl rounded-bl-xl items-center pl-10"
                >
                  <div>
                    <ul class="flex grow items-center gap-5">
                      <li class="inline">
                        Aired: <span>{{ anime.aired.string }}</span>
                      </li>
                      <li class="inline">
                        Broadcast: <span>{{ anime.broadcast.string }}</span>
                      </li>
                      <li class="inline">
                        Studios: <span>{{ anime.studios[0].name }}</span>
                      </li>
                    </ul>
                  </div>
                  <div
                    class="h-full flex items-center border-l-2 border-l-[#3ec9c2] px-10"
                  >
                    <div>
                      <a href="">
                        MORE DETAILS
                        <i class="fa-solid fa-arrow-down ml-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-5">
        <div>
          <tabs :anime="anime" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getAnimeDetails } from "@/components/api";
import Tabs from "@/components/Tabs.vue";
export default {
  components: {
    Tabs,
  },
  created() {
    let getResponce = getAnimeDetails(this.$route.params.animeId);
    getResponce.then((data) => {
      this.anime = data.data;
    });
  },
  data() {
    return {
      anime: null,
    };
  },
  computed: {
    getAnimeDescription() {
      if (!this.anime.synopsis) return;
      return this.anime?.synopsis.replace("[Written by MAL Rewrite]", "");
    },
    getAnimeGenre() {
      return this.anime.genres.map((genre) => genre.name);
    },
  },
};
</script>
<style lang="scss" scoped>
.upperblock-overflow {
  &::before {
    background: rgb(0 37 72 / 86%);
    width: 100%;
    height: 100%;
    position: absolute;
    content: "";
  }
}
.bottomblock-overflow {
  &::before {
    width: 100%;
    height: 100%;
    background: #007cef;
    position: absolute;
    content: "";
  }
}
</style>
