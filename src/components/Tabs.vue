<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="md:flex mb-0 list-none flex-wrap pt-5 flex-row">
        <li
          class="mr-2 lg:last:mr-0 mb-3 md:mb-0 mt-3 flex-auto text-center"
          v-for="(tab, idx) in tabs"
          :key="tab.title"
        >
          <a
            class="text-xs font-bold uppercase px-5 py-3 rounded block leading-normal"
            v-on:click="toggleTabs(idx)"
            v-bind:class="{
              'text-black bg-white': openTab !== idx,
              'text-white bg-fuchsia-700': openTab === idx,
            }"
          >
            {{ tab.title }}
          </a>
        </li>
      </ul>
      <div
        class="text-black relative flex flex-col min-w-0 break-words w-full mb-6 rounded"
      >
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <tab :class="{ hidden: openTab !== 0, block: openTab === 0 }">
              <div class="flex h-[500px] justify-center my-10">
                <iframe
                  width="100%"
                  height="100%"
                  :src="anime.trailer.embed_url"
                  frameborder="0"
                  allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </tab>
            <tab :class="{ hidden: openTab !== 1, block: openTab === 1 }">
              <div>1</div>
            </tab>
            <tab :class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <div>2</div>
            </tab>
            <tab :class="{ hidden: openTab !== 3, block: openTab === 3 }">
              <div>3</div>
            </tab>
            <tab :class="{ hidden: openTab !== 4, block: openTab === 4 }">
              <div>4</div>
            </tab>
            <tab :class="{ hidden: openTab !== 5, block: openTab === 5 }">
              <div>5</div>
            </tab>
            <tab :class="{ hidden: openTab !== 6, block: openTab === 6 }">
              <div>6</div>
            </tab>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from "@/components/Tab.vue";
export default {
  props: {
    anime: {
      type: Object,
      require: false,
    },
  },
  components: {
    Tab,
  },
  data() {
    return {
      openTab: 0,
      tabs: [
        {
          title: "TRAILER",
        },
        {
          title: "EPISODES",
        },
        {
          title: "REVIEWS",
        },
        {
          title: "RECOMmEDATIONS",
        },
        {
          title: "STATS",
        },
        {
          title: "CHARACTERS AND STAFF",
        },
        {
          title: "MORE",
        },
      ],
    };
  },
  methods: {
    toggleTabs(tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>
