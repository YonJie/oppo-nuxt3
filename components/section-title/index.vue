<template>
  <div class="section-title">
    <h3>{{ title }}</h3>
  </div>
</template>

<script setup lang="ts">
export interface IProps {
  title: string;
}
const IProps = withDefaults(defineProps<IProps>(), {
  title: "",
});
</script>

<style lang="scss" scoped>
.section-title {
  padding-top: 60px;
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;
  /* @include border(); */
}
</style>
