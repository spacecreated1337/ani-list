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
        ></div>
      </div>
      <div class="relative z-20">
        <div class="bottomblock-overflow"></div>
        <div class="container mx-auto z-10">
          <div
            class="grid grid-cols-[auto,1fr] relative -translate-y-1/2 gap-10 items-center"
          >
            <div>
              <img
                class="rounded-lg"
                :src="anime.images.jpg.image_url"
                :alt="anime.title"
              />
            </div>
            <div class="mt-32 relative">
              <div class="flex justify-between items-center">
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
              <div class="pt-16">
                <div class="flex justify-between">
                  <h3 class="text-2xl">Synopsis</h3>
                  <ul>
                    <li class="inline">Ranked: {{ anime.rank }}</li>
                    <li class="inline">Popularity: {{ anime.popularity }}</li>
                    <li class="inline">Members: {{ anime.members }}</li>
                  </ul>
                </div>
                <p class="mt-4 text-lg">{{ getAnimeDescription }}</p>
              </div>
            </div>
          </div>
          <div class="relative">123</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getAnimeDetails } from "@/components/api";
export default {
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
  },
};
</script>
<style lang="scss" scoped>
.upperblock-overflow {
  &::before {
    background: #002548d9;
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
