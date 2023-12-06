<template>
  <div class="home">
    <div class="wrapper">
      <swiper :banners="banners"></swiper>
      <tab-category></tab-category>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useHomeStore } from "~/store/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();
const { banners } = storeToRefs(homeStore);
</script>
<style lang="scss"></style>
