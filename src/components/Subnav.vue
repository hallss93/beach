<template>
  <div>
    <div
      class="c-gallery"
      v-for="(i, index) in beachs"
      :key="`img-beachs-${index}`"
      :style="{ 'background-image': `url(${i.img})` }"
    ></div>
  </div>
</template>
<script>
import beachs from "./../../api/beachs";
export default {
  name: "subnav",
  data() {
    return {
      beachs: []
    };
  },
  methods: {
    async slide(index) {
      document.querySelectorAll(".c-gallery").forEach((e, i) => {
        if (i != index) e.style.display = "none";
        else {
          e.style.display = "block";
          let time = 0;
          let array = [];
          for (var l = 1000; l > 500; l--) {
            array.push(l);
          }
          let promises = [];
          array.map(el => {
            promises.push(
              new Promise(resolve => {
                setTimeout(async () => {
                  console.log(el);
                  e.style.backgroundPosition = "100% " + el / 10 + "%";
                  resolve(true);
                }, time);
              })
            );
            time += 20;
          });
          Promise.all(promises);
        }
      });
    },
    async getBeachs() {
      const { data, status } = await beachs.getBeachs();
      if (status === 200) {
        this.beachs = data;
        let index = 1,
          that = this;
        setTimeout(() => {
          this.slide(index);
        }, 200);
        index++;
        if (index == that.beachs.length) index = 1;
        setInterval(() => {
          setTimeout(() => {
            this.slide(index);
            index++;
            if (index == that.beachs.length) index = 1;
          }, 2000);
        }, 10000);
      }
    }
  },
  created() {
    this.getBeachs();
  }
};
</script>
