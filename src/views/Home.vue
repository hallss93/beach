<template>
  <div class="home">
    <navbar></navbar>
    <subnav :beaches="beaches"></subnav>
    <container id="container-main">
      <template slot="body">
        <h1 class="o-text gigant bold center pb-20">Listagem das Praias</h1>

        <div class="flex">
          <div
            class="grid-6"
            v-for="(i, index) in beaches"
            :key="`card-beach-${index}`"
          >
            <div
              class="ml-15 mr-15 mb-15 c-card pointer hover no-radius minus fixed-height"
              @click="redirect(index)"
            >
              <img class="o-img full" :src="i.img" alt="" />
              <div class="pt-10 pr-10 pb-10 pl-10">
                <h2 class="o-text large bold center pb-20">{{ i.name }}</h2>
                <h3 class="o-text">{{ i.description }}</h3>
              </div>
            </div>
          </div>
        </div>
      </template>
    </container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Subnav from "@/components/Subnav.vue";
import Container from "@/components/Container.vue";

import beaches from "./../../api/beaches";
import mixinContainer from "@/mixins/mixin-container.js";

import { mapState, mapMutations } from "vuex";

export default {
  name: "home",
  data() {
    return {
      interval: null
    };
  },
  components: { Navbar, Subnav, Container },
  computed: {
    ...mapState(["beaches"])
  },
  mixins: [mixinContainer],
  methods: {
    ...mapMutations(["ADD_BEACHES"]),
    addBeaches: function(data) {
      this.ADD_BEACHES(data);
    },
    async redirect(index) {
      await clearInterval(this.interval);

      this.$router.push({ name: "beach", params: { index: index } });
    },
    /**
     * @description Request for get All beaches in API Mock
     */
    async getBeaches() {
      const { data, status } = await beaches.getBeaches();
      if (status === 200) {
        this.addBeaches(data);

        // First slide
        setTimeout(() => {
          this.slide(1);
        }, 100);

        let index = 2,
          that = this;

        // Interval for slide
        this.interval = setInterval(() => {
          setTimeout(() => {
            this.slide(index);
            index++;
            if (index == that.beaches.length) index = 1;
          }, 2000);
        }, 10000);

        this.animationContainer();
      }
    }
  },
  created() {
    this.getBeaches();
  }
};
</script>
