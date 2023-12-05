<template>
  <div class="layout">
    <!-- header -->
    <app-header></app-header>
    <!-- 导航栏 -->
    <navbar :navbars="navbars"></navbar>
    <!-- 页面内容的占位 -->
    <slot></slot>
    <!-- footer -->
    <app-footer></app-footer>
  </div>
</template>

<script lang="ts" setup>
import { useHomeStore } from "~/store/home";
import { storeToRefs } from "pinia";
const homeStore = useHomeStore();
homeStore.fetchHomeInfoData("oppo"); // 触发actions
const { navbars } = storeToRefs(homeStore);
</script>
