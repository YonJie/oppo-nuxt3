<template>
  <div class="home">
    <div class="wrapper">
      <swiper :banners="banners"></swiper>
      <tab-category
        :categorys="categorys"
        @item-click="handleItemClick"
      ></tab-category>
      <template v-for="item in categorys" :key="item.id">
        <section-title :title="item.title"></section-title>
        <grid-view :productDetailss="item.productDetailss"></grid-view>
      </template>
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

const title = ref("11");
</script>
<style lang="scss"></style>
