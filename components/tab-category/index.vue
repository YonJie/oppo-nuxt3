<template>
  <div class="tab-category">
    <template v-for="item in categorys" :key="item.id">
      <div class="category-item" @click="handleProductClick(item)">
        <img class="pic-str" :src="item.picStr" alt="" />
        <div class="title">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { ICategory } from "~/store/home";

export interface IProps {
  categorys: ICategory[];
}
const props = withDefaults(defineProps<IProps>(), {
  categorys: () => [],
});

// 两种写法，区别是是否 类型声明
// const emits = defineEmits(["itemClick"]);
const emits = defineEmits<{
  (e: "itemClick", item: ICategory): void;
}>();
function handleProductClick(item: ICategory) {
  emits("itemClick", item);
}
</script>

<style lang="scss" scoped>
.tab-category {
  margin-top: 40px; /* color: red; */
  /* @include border(); */
  @include normalFlex();
  align-items: center;
  .category-item {
    height: 100%;
    cursor: pointer;
    .pic-str {
      width: 80px;
      height: 80px;
    }

    .title {
      margin-top: 16px;
      font-size: 16px;
      text-align: center;
      height: 24px;
      max-width: "120px";
    }
  }
}
</style>
