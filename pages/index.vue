<template>
  <div class="home">
    <div class="wrapper">
      <swiper :banners="banners"></swiper>
      <tab-category
        :categorys="categorys"
        @itemClick="handleItemClick"
      ></tab-category>
      <template v-for="item in categorys" :key="item.id">
        <section-title :title="item.title"></section-title>
        <grid-view
          :productDetailss="item.productDetailss"
          :categoryUrl="item.url"
        ></grid-view>
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
  // 进行详细页面跳转 -- 编程导航 -- 不利于seo
  return navigateTo({
    path: "/oppoDetail",
    query: {
      type: item.type,
    },
  });
}
</script>
<style lang="scss"></style>
