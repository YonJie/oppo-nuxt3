<template>
  <div class="navbar">
    <div class="wrapper content">
      <NuxtLink to="/" class="content-left">
        <img class="logo" src="@/assets/images/logo.png" alt="logo" />
        <h1 class="title">OPPO手机商城</h1>
      </NuxtLink>
      <ul class="content-center">
        <template v-for="(item, index) in navbars" :key="index">
          <li
            :class="[currentIndex === index ? 'active' : '']"
            @click="handleItemClick(index)"
          >
            <NuxtLink class="link" :to="getPagePath(item)">{{
              item.title
            }}</NuxtLink>
          </li>
        </template>
      </ul>
      <search class="content-right"> </search>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { INavbar } from "~/store/home";

export interface iProps {
  navbars: INavbar[];
}

const props = withDefaults(defineProps<iProps>(), {
  navbars: () => [],
});

let currentIndex = ref<number>(0);

function handleItemClick(index: number) {
  currentIndex.value = index;
}

const getPagePath = computed(() => {
  return (item: INavbar) => {
    let path = "/";
    if (item.type !== "oppo") {
      path += item.type;
    }
    return path;
  };
});
</script>

<style lang="scss" scoped>
.navbar {
  height: $navBarHeight;
  z-index: 99;
  border-bottom-color: rgba(0, 0, 0, 0.06);
  border-bottom-style: solid;
  border-bottom-width: 1px;

  /* 吸顶 */
  @include elementSticky(36px);
  background-color: white;

  .content {
    height: 100%;
    /* @include border(); */
    @include normalFlex();
    justify-content: flex-start;
    align-items: center;

    .content-left {
      display: inline-block;
      width: $logoWidth;
      height: $logoHeight;
      .logo {
        height: 100%;
      }
      .title {
        text-indent: -1000px;
        height: 0;
        margin: 0;
      }
    }

    .content-center {
      @include normalFlex();
      width: 530px;
      margin-left: 60px;

      .link {
        font-size: 14px;
        color: #000;
        opacity: 0.55;
      }
      .link:hover {
        opacity: 1;
      }
      .active .link {
        opacity: 1;
      }
    }

    .content-right {
      margin-left: 50px;
    }
  }
  .github-corner:hover .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
  @keyframes octocat-wave {
    0%,
    100% {
      transform: rotate(0);
    }
    20%,
    60% {
      transform: rotate(-25deg);
    }
    40%,
    80% {
      transform: rotate(10deg);
    }
  }
  @media (max-width: 500px) {
    .github-corner:hover .octo-arm {
      animation: none;
    }
    .github-corner .octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }
  }
}
</style>
