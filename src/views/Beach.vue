<template>
  <div class="home">
    <navbar></navbar>
    <subnav :stay="true" :beach="beach"></subnav>
    <container id="container-beach">
      <template slot="body">
        <h1 class="o-text gigant bold center pb-20">{{beach.name}}</h1>

        <h3 class="o-text large center">{{beach.description}}</h3>

        <img class="o-img full height-auto mt-15" :src="beach.img" alt="">
      </template>
    </container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Subnav from "@/components/Subnav.vue";
import Container from "@/components/Container.vue";
import mixinContainer from "@/mixins/mixin-container.js";

import beaches from "./../../api/beaches";

import { mapState, mapMutations } from "vuex";

export default {
  name: "beach",
  components: { Navbar, Subnav, Container },
  computed: {
    ...mapState(["beaches"]),
    beach() {
      if (this.beaches.length == 0) {
        this.getBeaches();
        return {};
      }else return this.beaches[this.$route.params.index];
    }
  },
  mixins: [mixinContainer],
  methods: {
    ...mapMutations(["ADD_BEACHES"]),
    addBeaches: function(data) {
      this.ADD_BEACHES(data);
    },
    /**
     * @description Request for get All beaches in API Mock
     */
    async getBeaches() {
      const { data, status } = await beaches.getBeaches();
      if (status === 200) {
        this.addBeaches(data);
      }
    }
  },
  created() {}
};
</script>
