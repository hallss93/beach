<template>
  <div class="home">
    <navbar></navbar>
    <subnav></subnav>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Subnav from "@/components/Subnav.vue";
export default {
  name: "home",
  components: { Navbar, Subnav }
};
</script>
