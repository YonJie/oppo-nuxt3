<template>
  <div class="home">
    <div class="wrapper">
      <swiper :banners="banners"></swiper>
      <tab-category
        :categorys="categorys"
        @item-click="handleItemClick"
      ></tab-category>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useHomeStore } from "~/store/home";
import { storeToRefs } from "pinia";
import type { ICategory } from "~/store/home";

const homeStore = useHomeStore();
const { banners, categorys } = storeToRefs(homeStore);

function handleItemClick(item: ICategory) {
  // console.log(item.title);
}
</script>
<style lang="scss"></style>
