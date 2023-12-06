<template>
  <div class="intelligent">
    <div class="wrapper content">
      <swiper :banners="banners"></swiper>
      <tab-category :categorys="categorys"></tab-category>
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

<script setup lang="ts">
import { getHomeInfo } from "~/service/home";
const { data } = await getHomeInfo("intelligent");
let { banners, categorys } = data.value?.data;
</script>

<style lang="scss" scoped></style>
