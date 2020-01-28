<template>
  <div>
    <div v-if="!stay">
      <div
        class="c-gallery"
        v-for="(i, index) in beaches"
        :key="`img-beaches-${index}`"
        :style="{ 'background-image': `url(${i.img})` }"
      ></div>
    </div>
    <div v-else>
      <div
        class="c-gallery show"
        :style="{ 'background-image': `url(${beach.img})` }"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "subnav",
  props: {
    beaches: {
      type: Array,
      default: () => {
        return [];
      }
    },
    index: {
      type: Number,
      default: 0
    },
    beach: {
      type: Object,
      default: () => {
        return {};
      }
    },
    stay: {
      type: Boolean,
      default: false
    }
  }
};
</script>
