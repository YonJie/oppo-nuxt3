import { defineStore } from "pinia";
import type { HomeInfoType } from "~/service/home";
import { getHomeInfo } from "~/service/home";

export interface INavbar {
  id?: string;
  title?: string;
  type?: string;
  link?: string;
}

export interface IBanner {
  id?: string;
  picStr?: string;
  link?: string;
}

export interface ICategory {
  id?: string;
  picStr?: string;
  title?: string;
  type?: string;
  url?: string;
  productDetailss?: IProductDetail[];
  link?: string;
}

export interface IProductDetail {
  id?: string;
  title?: string;
  url?: string;
  link?: string;
  priceInfo?: IPriceInfo;
  activityList?: IActivityList[];
}

export interface IPriceInfo {
  buyPrice?: string;
  prefix?: string;
  currentTag?: string;
}

export interface IActivityList {
  type?: string;
  activityInfo?: string;
}

export interface IHomeState {
  navbars?: INavbar[];
  banners?: IBanner[];
  categorys?: ICategory[];
}

export const useHomeStore = defineStore("home", {
  state: (): IHomeState => {
    return {
      navbars: [],
      banners: [],
      categorys: [],
    };
  },
  actions: {
    // 获取首页数据
    async fetchHomeInfoData(type: HomeInfoType) {
      const { data } = await getHomeInfo(type);
      const { navbars, banners, categorys } = data.value?.data;
      this.navbars = navbars || [];
      this.banners = banners || [];
      this.categorys = categorys || [];
    },
  },
});
